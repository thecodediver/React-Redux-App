import axios from 'axios';


export const FETCH_SETANDRISE_START = "FETCH_SETANDRISE_START";
export const FETCH_SETANDRISE_SUCCESS = "FETCH_SETANDRISE_SUCCESS";
export const FETCH_SETANDRISE_FAILURE = "FETCH_SETANDRISE_FAILURE";


export const fetchSetAndRise = (lat, lng) => {

    return dispatch => {
        dispatch({ type: FETCH_SETANDRISE_START });

        axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_SETANDRISE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_SETANDRISE_FAILURE, payload: err.message })
            })

    }
}