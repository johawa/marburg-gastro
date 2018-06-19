import React, { Component } from 'react';

import svgURL from '../../assets/spritesheet_vector_1_to_2/sprite_60fps.svg';


class Pin extends Component {
    state = {

    }

    handleClick = (e) => {
        const el = document.getElementById('svg-1');
        const elDiv = document.getElementById('pin-div-1');
        elDiv.classList.toggle('animate-pin');
        el.classList.toggle('play');
        console.log('clicked', e.target)
      }


    render() {
        return (
            <li class="map-marker map-marker-svg" onClick={(e) => this.handleClick(e)}>
                <div class="shapeshifter" id="svg-1" style={{ backgroundImage: `url(${svgURL})` }}></div>

                <div class="pin-div" id="pin-div-1">
                    TEST
                  <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        TEXTBOX
                  </div>
                    <div>
                        CLOSEBUTTON
                  </div>
                </div>
            </li>
        );
    }
}

export default Pin;