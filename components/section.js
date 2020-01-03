import React from 'react';
import Link from 'next/link';

function Section({ logo, name, url }){
    return(
        <div className="section">
            <Link href={`sections/${url}`}>
                <img className="logo" src={logo} />
            </Link>
            <p className="text">{name}</p>
        </div>
    )
};

export default Section;