import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import '../styles/index.scss';

function Home(){
  return(
    <div>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="static/fonts/fontawesome/css/all.min.css"></link>
      </Head>
  
      <Nav />
    </div>
  )
}

export default Home
