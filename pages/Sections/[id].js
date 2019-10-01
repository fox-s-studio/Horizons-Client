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

function Sections(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuMobile, setMenuMobile] = useState(false);
    const [count, setCount] = useState(0);

    const [backgrounds, setBackgrounds] = useState([]);
    const [currentBackground, setCurrentBackground] = useState();

    const [sections, setSections] = useState([]);

    const isProd = process.env.NODE_ENV === 'production'

    const apiUrl = isProd ? "https://strapi-hoz-test.herokuapp.com/" : "http://localhost:1337/";

    
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
        axios.get(`${apiUrl}Sections/`,{params:{Nom:id}})
        .then(res => {
            if(res.data[0] != undefined && id != undefined){
            axios.get(`${apiUrl}Backgrounds/`,{params:{id: res.data[0].background.id}})
                .then(res => {
                setBackgrounds(backgrounds.push(res.data[0].Image.url))
                addBackgrounds(backgrounds[0])
                })

                .catch(err => console.log(err))
            }
        }).catch(err => console.log(err))
    },[id]);

    function toggleMenu(){
        setMenuMobile(!menuMobile);
    }

    return (
        <div className="Sections" style={currentBackground ? {backgroundImage: `linear-gradient(to bottom,rgba(33,33,33,.5),rgba(33,33,33,.5)), url(${currentBackground}) `} : null }>
            <Meta title="Horizon's Gaming - Sections"/>
            <Loader loaded={isLoaded} />
            <Particles className="particles" params={params} />
            <MenuMobile active={menuMobile} toggleMenu={toggleMenu}/>
            <Nav toggleMenu={toggleMenu} />
            <div className="content">
                <div className="contentTitle">
                    <h1 className="title med">Section {id}</h1>
                </div>
                <div className="sectionsContent">

                </div>
            </div>
        </div>
        );
}

export default Sections
