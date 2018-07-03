import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/place/details/json?placeid='
});

export default instance;