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
      <div>
        <Head>
          <title>Home</title>
          <link rel="stylesheet" type="text/css" href="static/fonts/fontawesome/css/all.min.css"></link>
        </Head>
        <Particles className="particles" params={params} />
        <Nav />
      </div>
    )
  :
  (
    <div>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="static/fonts/fontawesome/css/all.min.css"></link>
      </Head>
      <Loader />
    </div>
  );
}

export default Home
