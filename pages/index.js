import React, {useState, useEffect} from 'react';
import Meta from '../components/meta';
import Nav from '../components/nav';
import '../styles/index.scss';
import Particles from 'react-particles-js';
import params from '../particles.config';
import Loader from '../components/loader';
import MenuMobile from '../components/menu-m';
import axios from 'axios';

function Home(){
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [count, setCount] = useState(0);

  const [backgrounds, setBackgrounds] = useState([]);
  const [currentBackground, setCurrentBackground] = useState();

  const isProd = process.env.NODE_ENV === 'production'

  const apiUrl = isProd ? "https://strapi-hoz-test.herokuapp.com/" : "http://localhost:1337/";

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
    axios.get(`${apiUrl}Pages/`,{params:{Nom: 'Homepage'}})
      .then(res => {
        if(res.data[0] != undefined){

          axios.get(`${apiUrl}Backgrounds/`,{params:{_id: res.data[0].backgrounds.id}})
            .then(res => {
              setBackgrounds(backgrounds.push(res.data[0].Image.url))
              addBackgrounds(backgrounds[0])
            })

            .catch(err => console.log(err))
        }
      }).catch(err => console.log(err))
  },[]);

  function toggleMenu(){
    setMenuMobile(!menuMobile);
  }

  return (
      <div className="Homepage" style={currentBackground ? {backgroundImage: `linear-gradient(to bottom,rgba(33,33,33,.5),rgba(33,33,33,.5)), url(${currentBackground}) `} : null }>
        <Meta title="Horizon's Gaming"/>
        <Loader loaded={isLoaded} />
        <Particles className="particles" params={params} />
        <MenuMobile active={menuMobile} toggleMenu={toggleMenu}/>
        <Nav toggleMenu={toggleMenu} />
        <div className="content">
          <div className="left">
            <p className="title sub">Bienvenue Sur</p>
            <p className="title">Horizon's Gaming</p>
            <p className="text bold">Communauté multi-gaming Francophone</p>
            <div className="social-m">
              <a href="https://discord.gg/YGu9BWW" target="blank">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://twitter.com/HOz_Actu" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="social">
              <a href="https://discord.gg/YGu9BWW" target="blank">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://twitter.com/HOz_Actu" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
