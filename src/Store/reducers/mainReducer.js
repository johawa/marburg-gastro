import {
  PIN_OPEN,
  PIN_CLOSE,
  FOCUS_PIN,
  LOADING_GOOGLE_DATA_DONE,
  SET_GOOGLE_LOCATION_INFO,
  FETCH_GOOGLE_LOCATION_INFO_FAILED
} from "../actions/actionTypes";

import { updateObject } from '../../shared/utility';
import dotProp from 'dot-prop-immutable';

const initialState = {
  pin_open: false,
  focused_pin: null,
  loading_error: false,
  loading: true,
  /*  locations: [{
     name: '',
     open_now: null,
     opening_hours: [],
     phone_number: null,
     address: '',
     types: []
   }] */
  locations: []
};

const setLocationData = (state, action) => {
  return {
    ...state,
    locations: state.locations.concat(action.data)
  }
}




const reducer = (state = initialState, action) => {
  switch (action.type) {
    //PIN
    case PIN_OPEN:
      return {
        ...state,
        pin_open: true
      };
    case PIN_CLOSE:
      return {
        ...state,
        pin_open: false
      };
    case FOCUS_PIN:
      return {
        ...state,
        focused_pin: action.pinID
      };
    //LOCATION INFO
    case LOADING_GOOGLE_DATA_DONE:
      return {
        ...state,
        loading: false,
      };
    case SET_GOOGLE_LOCATION_INFO:
      return setLocationData(state, action)

    case FETCH_GOOGLE_LOCATION_INFO_FAILED:
      return {
        ...state,
        loading_error: true
      };
    default:
      return state;
  }
};

export default reducer;
