import {
    PIN_OPEN,
    PIN_CLOSE,
    FOCUS_PIN,
    LOADING_GOOGLE_DATA_DONE,
    SET_GOOGLE_LOCATION_INFO,
    FETCH_GOOGLE_LOCATION_INFO_FAILED
} from './actionTypes';

import axios from '../../axios-base';

const APIkey = 'AIzaSyDl5V70A4W7jrZD3a7nH1kWexGgQ7s0FKA';

const IDs = [
    //Vila Vita Rosenpark
    'ChIJd2Yrr5pivEcRey44bKRGclY',
    //Marburger Esszimmer
    'ChIJkeHju4RivEcRZA48W54ehO4',
    //Restaurant Waldschlösschen
    'ChIJQ3usWnNjvEcRTF5t-4uBwRE',
    //Restaurant Bücklingsgarten
    'ChIJd2ECwIdivEcRBBK4WGHixgE',
    //Aroma Bistro & Eisbar Marburg
    'ChIJkeHju4RivEcRu_JPIVvsX0s',
    //Aroma Eismanufaktur Frankfurt
    'ChIJ-XMltgEMvUcR8ZuXnCWkppE',
    //Cafe Rosenpark
    'ChIJ5Xv90YRivEcR4TOVLplHVQU',
    //Congresszentrum
    
    //Cafe Lahnberge

    //Das Vila Vita Essentials

    //Hofgut Dagobertshausen
    
]

export const openPin = () => {
    return {
        type: PIN_OPEN,
    };
}
    ;
export const closePin = () => {
    return {
        type: PIN_CLOSE,
    };
};
export const focusPin = (pinID) => {
    return {
        type: FOCUS_PIN,
        pinID: pinID
    };
};


export const setLocationInfo = (data) => {
    return {
        type: SET_GOOGLE_LOCATION_INFO,
        data: data
    };
};


export const setLocationInfoFailed = () => {
    return {
        type: FETCH_GOOGLE_LOCATION_INFO_FAILED,
    };
};

export const loadingDone = () => {
    return {
        type: LOADING_GOOGLE_DATA_DONE,
    };
};


/* //IMPORVE ASYNC !!!
export const initLocationInfo = () => {
    return dispatch => {
       const promises = IDs.map(async (id) => {
           const responses = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${APIkey}`)
                .then(response => {
                    dispatch(setLocationInfo(response.data.result));
                }).then(() => {
                    dispatch(loadingDone());
                })
                .catch(error => {
                    dispatch(setLocationInfoFailed());
                });
        });
    };
}; */

export const initLocationInfo = () => {
    return async function (dispatch) {
        const promises = IDs.map(async (id) => {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=${APIkey}`)
            return {
                data: response.data.result
            }

        });
        await Promise.all(promises)
            .then((res) => {
                dispatch(setLocationInfo(res));
            })
            .then(() => {
                dispatch(loadingDone());
            })
            .catch(error => {
                dispatch(setLocationInfoFailed());
            });

    };
};
