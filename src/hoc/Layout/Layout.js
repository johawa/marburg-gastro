import React from 'react';
import Aux from '../Auxilary/Auxilary';

import Infobox from '../../container/Infobox/Infobox';

import './Layout.css';

const layout = (props) => {
    return (
        <div className="Site-container">
            <div className="Sidedrawer">
                <Infobox />
            </div>

            <div className="main-container" >
                {props.children}
            </div>
        </div>
    );
}


export default layout;
