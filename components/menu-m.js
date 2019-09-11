import React from 'react';
import Link from 'next/link';
import LogoM from '../static/logo.png';

export default function MenuMobile(props){
    return(
        <div className={(props.active) ? 'menu-m active' : 'menu-m'}>
            <div className="top">
                <img src={LogoM} alt="Logo Horizons" className="Logo-m" />
                <i className="fas fa-times"></i>
            </div>
            <div className="menu-content">
                <ul className="itemLinks">
                    <li className="Link">
                    <Link href='/'>
                        <a>Présentation</a>
                    </Link>
                    </li>
                    <li className="Link">
                    <Link href='/'>
                        <a>News</a>
                    </Link>
                    </li>
                    <li className="Link">
                    <Link href='/'>
                        <a>Sections</a>
                    </Link>
                    </li>
                    <li className="Link">
                    <Link href='/'>
                        <a>Évennements</a>
                    </Link>
                    </li>
                    <li className="Link">
                    <Link href='/'>
                        <a>Streams</a>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};