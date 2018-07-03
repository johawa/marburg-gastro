import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import { connect } from 'react-redux';


import { openPin, closePin, focusPin } from "../../Store/actions/index";
import svgURL from '../../assets/spritesheet_vector_1_to_2/sprite_60fps.svg';


import './Pin.css';


class Pin extends Component {

    handleClickOnPin = (e, id) => {
        //Clicked Element
        const currentEl = document.getElementById(e.target.id);
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

    handleClickOnCloseSvg = (e, id) => {
        const currentEl = document.getElementById(`svg-${id}`);
        const currentElDiv = document.getElementById(`descripton-container-${id}`);
        currentEl.classList.remove('play');
        currentElDiv.classList.remove('animate-description');
        this.props.close_pin();
    }



    render() {
        return (
            <div className="pin-container"
                onClick={this.props.clicked}
                style={{ left: `${this.props.left}%`, top: `${this.props.top}%` }} >

                <div className="PinSvg-container" onClick={(e) => this.handleClickOnPin(e, this.props.id)}>
                    <div className="pin-svg" id={`svg-${this.props.id}`} style={{ backgroundImage: `url(${svgURL})` }}></div>
                </div>
                <div className="descripton-container" id={`descripton-container-${this.props.id}`} style={{ background: `${this.props.color}` }}>

                    <Ionicon icon="ios-close" className="icon-box" fontSize="50px" color="#777" onClick={(e) => this.handleClickOnCloseSvg(e, this.props.id)} />

                    <div className="Restaurant-Description">
                        <p className="p-main"><span>Restaurant #
                            {this.props.id}</span></p>
                        <p className="p-detail">
                            <span>Adresse</span>
                            <br />
                            <span className="gr">Stadtstraße 1, XXXX Marburg</span>
                        </p>
                        <p className="p-detail">
                            <span>Montag - Samtag</span>
                            <br />
                            <span className="gr">8Uhr - 20Uhr</span>
                        </p>

                    </div>

                    <a class="button contact-stay">Contact</a>

                    <div className="imageClip">
                        <div className="image" style={{ backgroundImage: `url(${this.props.Logo})` }}></div>
                    </div>

                </div>
            </div>



        );
    }
}



const mapStateToProps = state => {
    return {
        is_pin_open: state.pin_open,
        focused_pin: state.focused_pin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        open_pin: () => dispatch(openPin()),
        close_pin: () => dispatch(closePin()),
        focus_pin: (id) => dispatch(focusPin(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pin);

