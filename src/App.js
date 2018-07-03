import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { openPin, closePin, focusPin, initLocationInfo } from "./Store/actions/index";
import Pin from './components/Pin/Pin';
import Map from './components/Map/Map';
import Layout from './hoc/Layout/Layout';
import AromaLogo from './assets/AromaLogo.png'
import EsszimmerLogo from './assets/EsszimmerLogo.jpg';




class App extends Component {

  componentWillMount() {
    Promise.all([this.props.initLocationInfo()])

  }



  render() {
    return (
      <Layout>
        <Map>

          <Pin left={80} top={20} id={1} Logo={AromaLogo} color={'#FDC644'}/>
          <Pin left={30} top={60} id={2} Logo={EsszimmerLogo} color={'#96C253'} />


        </Map>


      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    is_pin_open: state.pin_open,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    open_pin: () => dispatch(openPin()),
    close_pin: () => dispatch(closePin()),
    focus_pin: (id) => dispatch(focusPin(id)),
    initLocationInfo: () => dispatch(initLocationInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


