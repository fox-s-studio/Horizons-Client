import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import '../styles/index.scss';
import Particles from 'react-particles-js';
import params from '../particles.config';
import Loader from '../components/loader';

function Home(){
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    },5000);
  });

  return (isLoaded) ? 
    (
      <div className="Homepage">
        <Head>
          <title>Home</title>
          <link rel="stylesheet" type="text/css" href="static/fonts/fontawesome/css/all.min.css"></link>
        </Head>
        <Particles className="particles" params={params} />
        <Nav />
        <div className="content">
          <div className="left">
            <p className="title sub">Bienvenue Sur</p>
            <p className="title">Horizon's Gaming</p>
            <p className="text bold">Communauté multi-gaming Francophone</p>
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
    )
  :
  (
    <div className="Homepage">
      <Head>
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="static/fonts/fontawesome/css/all.min.css"></link>
      </Head>
      <Loader />
    </div>
  );
}

export default Home
