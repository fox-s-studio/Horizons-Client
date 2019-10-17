import React, {useState, useEffect} from 'react';
import Meta from '../components/meta';
import Nav from '../components/nav';
import '../styles/index.scss';
import Particles from 'react-particles-js';
import params from '../particles.config';
import Loader from '../components/loader';
import MenuMobile from '../components/menu-m';
import Section from '../components/section';
import axios from 'axios';

function Sections(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuMobile, setMenuMobile] = useState(false);
    const [count, setCount] = useState(0);

  const [background, setBackground] = useState('');
  const [currentBackground, setCurrentBackground] = useState();

  const [sectionsArray, setSectionsArray] = useState([]);

  const isProd = process.env.NODE_ENV === 'production'

  const apiUrl = isProd ? "https://strapi-hoz-test.herokuapp.com/" : "http://localhost:1337/";

  useEffect(() => setCurrentBackground(background), [background])

  useEffect(() => console.log(true), [sectionsArray])

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
    axios.get(`${apiUrl}Pages/`,{params:{Nom: 'Sections'}})
      .then(res => {
        if(Array.isArray(res.data)){

          axios.get(`${apiUrl}Backgrounds/`,{params:{id: res.data[0].backgrounds.id}})
            .then(res => {
              setBackground(res.data[0].Image.url)
            })

            .catch(err => console.log(err))
        }
      }).catch(err => console.log(err))
  },[]);

  useEffect(() => {
    axios.get(`${apiUrl}Sections/`)
      .then(res => {
        if(Array.isArray(res.data)){
          setSectionsArray(res.data.map(section => {
              return {
                  urlEnding: section.Nom,
                  name: section.Titre,
                  logo: section.Logo.url
              };
            }));
          };
        }).catch(err => console.log(err))
  },[]);

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
                <h1 className="title med">Nos Sections</h1>
            </div>
            <div className="sectionsList">
              {sectionsArray.map(n => (
                <Section name={n.name} logo={n.logo} url={n.urlEnding} />
              ))}
            </div>
        </div>
      </div>
    );
}

export default Sections
