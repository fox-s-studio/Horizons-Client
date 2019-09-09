import React from 'react';
import Logo from '../static/logo.png';

export default function Loader(){
    return(
        <div className="Loader">
            <img src={Logo} alt="Logo Horizons" className="Logo" />
        </div>
    )
}