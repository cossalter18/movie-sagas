import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'
import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    console.log('APP.JS');
    this.getMovies()
    //this.props.dispatch({type: 'GET GENRES'})
  }

  getMovies = () => {
    this.props.dispatch({ type: "GET_MOVIES" })
  }

  handleClick=()=>{
    console.log('in handleClick of Posters')
  }

  render() {
    return (
      <div className="App'">
        <h1>movie sagas</h1>
        {this.props.reduxState.movies.map((movie)=>{
          return(
            <>
            <p>{movie.title}</p>
            <img src={movie.poster} alt={movie.title} onClick={this.handleClick(movie.id)}/>
            </>
          )
        })}
        <MovieList/>
        <MovieItem />
        </div>
    );
  }
}


const putStateOnProps = (reduxState) => ({ reduxState })
export default connect(putStateOnProps)(App);
