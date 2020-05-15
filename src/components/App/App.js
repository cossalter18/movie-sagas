import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount(){
    console.log('APP.JS');
    this.props.dispatch({type: 'GET_MOVIES'});
    this.props.dispatch({type: 'GET GENRES'})
  }

  
  render() {
  const movieListArray = this.props.reduxState.movies.map((movieItem, index)=>{
    return(
      <MovieItem movieItem={movieItem} key={index}></MovieItem>
    )
  })
   
    
      return(
        <div>
          <h2>test</h2>
          <div>
         {movieListArray}
          </div>
          <MovieItem/>
        </div>
    );
  }
}


const putStateOnProps = (reduxState) => ({ reduxState })
export default connect(putStateOnProps)(App);
