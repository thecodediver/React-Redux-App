import {
    FETCH_SETANDRISE_START,
    FETCH_SETANDRISE_SUCCESS,
    FETCH_SETANDRISE_FAILURE
  } from "../actions/actionIndex.js";
  

const initialState = {
    isLoading: false,
    setandrise: {},
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SETANDRISE_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SETANDRISE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                setandrise: action.payload,
                error: ""
            };
        case FETCH_SETANDRISE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};