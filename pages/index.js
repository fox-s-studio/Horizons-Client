import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Meta from '../components/meta';
import Nav from '../components/nav';
import '../styles/index.scss';
import Particles from 'react-particles-js';
import params from '../particles.config';
import Loader from '../components/loader';
import MenuMobile from '../components/menu-m';

function Home(){
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const isProd = process.env.NODE_ENV === 'production'

  useEffect(() => {
    console.log(isProd, process.env.NODE_ENV)
    setTimeout(() => {
      setIsLoaded(true);
    },5000); 
  });

  function toggleMenu(){ 
    setMenuMobile(!menuMobile);
  }

  return (
      <div className="Homepage">
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
