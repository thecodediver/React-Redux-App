import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addMovie } from './actions'

function App(props) {
  const [newMovie, setNewMovie] = useState("")

  const addMovie = e => {
    e.preventDefault()
    props.addMovie(newMovie)
    setNewMovie("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Favorite Movie List</h1>
        {props.movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
        <form onSubmit={addMovie}>
          <input type="text" value={newMovie} onChange={e => setNewMovie(e.target.value)} />
          <button id="submit">Submit Movie</button>
          <h3 style={{color: "red"}}>{props.error}</h3>
        </form>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    error: state.error,
    queriedOptions: state.queriedOptions,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, { addMovie })(App);
