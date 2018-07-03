import React from 'react';

const Infoboxelement = (props) => {

    return (
        <div className="Infobox">
            <p>{props.name}</p>
            <p>{props.open}</p>
            <p>{props.address}</p>
            <p>{props.oeffnungszeiten}</p>
            <p>{props.phone}</p>
            <p>{props.type}</p>
            {props.children}
        </div>

    )

}

export default Infoboxelement;