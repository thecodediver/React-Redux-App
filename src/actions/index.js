import axios from 'axios'
export const ADD_MOVIE_START = "ADD_MOVIE_START"
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS"
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE"

export const addMovie = movieTitle => dispatch => {
  dispatch({ type: ADD_MOVIE_START });
  const movie = movieTitle.trim().replace(" ", "+")
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9ce5b707717bd9cd0c1194cd822bdaff&query=${movie}`)
  .then(res => {
    dispatch({type: ADD_MOVIE_SUCCESS, payload: res.data.results})
  })
  .catch(err => {
    dispatch({type: ADD_MOVIE_FAILURE, payload: `Our server is having connectivity issues please try again later.`})
  })
}

