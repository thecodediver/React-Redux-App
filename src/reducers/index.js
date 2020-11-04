import { ADD_MOVIE_START, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from '../actions'

const initialState = {
  movies: [{title: "Star Wars", id: 11}, {title: "Batman", id: 268}, {title:"Inception", id: 27205}],
  isFetching: false,
  error: "",
  queriedOptions: [],
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MOVIE_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      }
    case ADD_MOVIE_SUCCESS:
      if(action.payload.length === 0) {
        return {
          ...state,
          error: "No Matching Results Found, Please Check Your Spelling And Try Again"
        }
      } else if(action.payload.length === 1) {
        console.log(action.payload[0])
        return {
          ...state,
          movies: [...state.movies, { title: action.payload[0].title, id: action.payload[0].id}],
          error: "",
          isFetching: false,
        }
      } else {
        console.log(action.payload)
        return {
          ...state,
          queriedOptions: action.payload,
          movies: [...state.movies, { title: action.payload[0].title, id: action.payload[0].id}],
          error: "",
          isFetching: false,
        }
      }
    case ADD_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    default: 
      return state;
  }
}