import React, { Component } from 'react';
import { connect } from 'react-redux'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
// import { HashRouter, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'




class App extends Component {
    // Renders the entire app on the DOM


    //used to fire the functions to dispatch to watcher
    componentDidMount() {
        console.log('APP.JS');
        this.getMovies()
        this.getGenres()

    }

    //dispatch to watcher to get all movies from DB
    getMovies = () => {
        this.props.dispatch({ type: "GET_MOVIES" })
    }
    //dispatch to watcher to get genres from DB
    getGenres = () => {
        this.props.dispatch({ type: "GET_GENRES" })
    }



    //click function that is sent an id and used to diplay that movie in the info page
    handleClick = (id) => {
        //console.log('in handleClick of Posters')
        this.props.history.push(`/info/${id}`)
    }

    render() {
        return (
            <div className="App'">
                <header className="header'">
                    <h1 align='center'>Welcome To Lackluster Video</h1>
                </header>
                <GridList cellHeight={"auto"} spacing={10} cols={5}>

                    {this.props.reduxState.movies.map((movie) => (
                        <GridListTile key={movie.id} cols={movie.cols || 1}>
                            <img src={movie.poster} alt={movie.title} onClick={() => this.handleClick(movie.id)} />
                        </GridListTile>
                    ))
                    }

                </GridList>


            </div>
        );
    }
}



const putStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putStateOnProps)(App));
