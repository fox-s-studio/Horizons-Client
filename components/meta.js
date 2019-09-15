import React from 'react';
import Head from 'next/head';

export default function Meta(props){
    return(
        <Head>
            <title>{props.title}</title>
            <link rel="stylesheet" type="text/css" href="static/fonts/fontawesome/css/all.min.css"></link>
            <link rel="icon" type="image/png" href="static/logo.png" />

            <meta property="og:type" content="article" />
	        <meta property="og:title" content="Horizon's Gaming" />
	        <meta property="og:url" content="http://horizons.foxstud.io/" />
	        <meta property="og:image" content="https://raw.githubusercontent.com/fox-s-studio/Horizons-Client/master/static/CardShare.png" />
	        <meta property="article:author" content="Horizon's" />

	        <meta name="twitter:card" content="summary_large_image" />
	        <meta name="twitter:site" content="@HOz_Actu" />
	        <meta name="twitter:title" content="Horizon's Gaming" />
	        <meta name="twitter:description" content="Horizon's Gaming" />
	        <meta name="twitter:image" content="https://raw.githubusercontent.com/fox-s-studio/Horizons-Client/master/static/CardShare.png" />
        </Head>
    )
}