import React from 'react';
import Logo from '../static/logo.png';

export default function Loader(props){
    return(
        <div className={props.loaded ? 'Loader Off' : 'Loader'}>
            <img src={Logo} alt="Logo Horizons" className="Logo" />
            <p className="text sm"> Récupération des données</p>
        </div>
    )
}