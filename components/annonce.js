import React from 'react';

export default function Annonce({...props}){
    return(
        <div className="Annonce">
            <p className="text">{props.title}</p>
            {
                props.picture 
                    ?
                    <div className="illustration"> 
                        <img src={props.picture} />
                    </div> : null
            }
            <p className="text sm">{props.resume}</p>
            <p className="text smst">{props.date}</p>
        </div>
    )
}