import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Infobox.css';
import Aux from '../../hoc/Auxilary/Auxilary';
import Infoboxelement from './Infoboxelements/Infoboxelement';
import { openPin, closePin, focusPin } from "../../Store/actions/index";


class Infobox extends Component {


    focus = (e, id) => {

        //Clicked Element
        const currentEl = document.getElementById(`svg-${id}`);
        const currentElDiv = document.getElementById(`descripton-container-${id}`);

        //Next Element
        const nextEl = document.getElementById(`svg-${this.props.focused_pin}`);
        const nextElDiv = document.getElementById(`descripton-container-${this.props.focused_pin}`);
        this.props.focus_pin(id);

        //Open Pin if all are closed
        if (!this.props.is_pin_open) {
            this.props.open_pin()
            currentEl.classList.add('play');
            currentElDiv.classList.add('animate-description');
        }
        //Close Pin if clicked twice
        else if (this.props.is_pin_open && this.props.focused_pin === id) {
            currentEl.classList.remove('play');
            currentElDiv.classList.remove('animate-description');
            this.props.close_pin();
        }
        //Open next pin if clicked, and close old one
        if (this.props.is_pin_open && this.props.focused_pin !== id) {
            currentEl.classList.add('play');
            currentElDiv.classList.add('animate-description');
            nextEl.classList.remove('play');
            nextElDiv.classList.remove('animate-description');
        }

    }


    render() {
        let elements = <p>Loading...</p>;
        if (!this.props.loading) {
            elements = this.props.locations.map((loc, i) => {                
                return  (
                    <div onClick={(e, i) => this.focus(e, i)} style={{ border: "1px solid green" }}>
                        <Infoboxelement
                            key={i}                            
                            name={loc.data.name}
                            open={loc.data.opening_hours.open_now ? 'offen' : 'geschlossen'}
                            address={loc.data.formatted_address}
                            //oeffnungszeiten={loc.data.opening_hours.weekday_text}
                            phone={loc.data.international_phone_number}                         
                        >
                        </Infoboxelement>
                    </div>

                );
            })
        }
      
        return (
            <Aux>
                {elements}
            </Aux>
        )
    };
}


const mapStateToProps = state => {
    return {
        is_pin_open: state.pin_open,
        focused_pin: state.focused_pin,
        locations: state.locations,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        open_pin: () => dispatch(openPin()),
        close_pin: () => dispatch(closePin()),
        focus_pin: (id) => dispatch(focusPin(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Infobox);