import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Meta from '../../components/meta';
import Nav from '../../components/nav';
import '../../styles/index.scss';
import Particles from 'react-particles-js';
import params from '../../particles.config';
import Loader from '../../components/loader';
import MenuMobile from '../../components/menu-m';
import axios from 'axios';
import Annonce from '../../components/annonce';

function Sections(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuMobile, setMenuMobile] = useState(false);
    const [count, setCount] = useState(0);

    const [backgrounds, setBackgrounds] = useState([]);
    const [currentBackground, setCurrentBackground] = useState();

    const [sectionName, setSectionName] = useState([]);
    const [sectionEvents, setSectionEvents] = useState({});
    const [sectionNews, setSectionNews] = useState([]);

    const isProd = process.env.NODE_ENV === 'production'

    const apiUrl = isProd ? "https://horizons-database.herokuapp.com/" : "http://localhost:1500";

    
    const router = useRouter()
    const { id } = router.query

    function addBackgrounds(backgrounds){
        setCurrentBackground(backgrounds);
    }

    useEffect(() => {
        setInterval(() => {
        setCount(count + 1)
        },1000)
        axios.get(apiUrl).then(res => {
        if(count < 5){
            setTimeout(() => {
            setIsLoaded(true);
            },1000 - (count*1000)); 
        } else {
            setIsLoaded(true);
        }
        });
    },[]);

    useEffect(() => {
        let eventsArray = [];
        let newsArray = [];
        axios.get(`${apiUrl}/Sections/`,{params:{Nom:id}})
        .then(async res => {
            if (Array.isArray(res.data[0].news)){
                res.data[0].news.map(n => {
                    axios.get(`${apiUrl}/News/${n.id}`).then(res => {
                        (res.data.Image) ?
                            newsArray.push({
                                Title : res.data.Titre,
                                Description : res.data.Description,
                                Picture : (!isProd) ? apiUrl + res.data.Image.url : res.data.Image.url
                            })
                        :
                            newsArray.push({
                                Title : res.data.Titre,
                                Description : res.data.Description,
                            })
                        setSectionNews(newsArray);
                    });
                })
            }
            if (Array.isArray(res.data[0].evenements)){
                res.data[0].evenements.map(n => {
                    axios.get(`${apiUrl}/Evenements/${n.id}`).then(res => {
                        (res.data.Image) ?
                            eventsArray.push({
                                Title : res.data.Titre,
                                Description : res.data.Description,
                                Picture : (!isProd) ? apiUrl + res.data.Image.url : res.data.Image.url
                            })
                        :
                            eventsArray.push({
                                Title : res.data.Titre,
                                Description : res.data.Description,
                            })
                        setSectionEvents(eventsArray);
                    });
                })
            }
            if(Array.isArray(res.data) && id != undefined){
                setSectionName(res.data[0].Titre)
                axios.get(`${apiUrl}/Backgrounds/`,{params:{_id: res.data[0].background.id}})
                    .then(res => {
                        setBackgrounds(backgrounds.push(res.data[0].Image.url))
                        if (!isProd){
                          addBackgrounds(apiUrl + backgrounds[0])
                        }else{
                          addBackgrounds(backgrounds[0])
                        }
                    })

                .catch(err => console.log(err))
            }
        }).catch(err => console.log(err))
    },[id]);

    function toggleMenu(){
        setMenuMobile(!menuMobile);
    }

    return (
        <div className="SectionPage" style={currentBackground ? {backgroundImage: `linear-gradient(to bottom,rgba(33,33,33,.5),rgba(33,33,33,.5)), url(${currentBackground}) `} : null }>
            <Meta title="Horizon's Gaming - Sections"/>
            <Loader loaded={isLoaded} />
            <Particles className="particles" params={params} />
            <MenuMobile active={menuMobile} toggleMenu={toggleMenu}/>
            <Nav toggleMenu={toggleMenu} />
            <div className="content">
                <div className="contentTitle">
                    <h1 className="title med">Section {sectionName}</h1>
                </div>
                <div className="sectionContent">
                    <div className="sectionNews">
                        <h3 className="text bold">News</h3>
                        <hr/>
                        <div className="content">
                            {
                                Array.isArray(sectionNews) 
                                ? sectionNews.map(n => {
                                    return(
                                        <Annonce    title={n.Title} 
                                                    resume={n.Description} 
                                                    date=""
                                                    picture={n.Picture}
                                                    key={n.Title}/>
                                    )
                                }) : null
                            }
                        </div>
                    </div>
                    <div className="sectionEvents">
                        <h3 className="text bold">Événements</h3>
                        <hr/>
                        <div className="content">
                            {
                                Array.isArray(sectionEvents) 
                                ? sectionEvents.map(n => {
                                    return(
                                        <Annonce    title={n.Title} 
                                                    resume={n.Description} 
                                                    date=""
                                                    picture={n.Picture}
                                                    key={n.Title}/>
                                    )
                                }) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Sections
