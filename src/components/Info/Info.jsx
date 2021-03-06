import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


class Info extends Component {

    //used to fire the get details function
    componentDidMount() {
        console.log('in Info COMPONENTDIDMOUT');
        this.getDetails();
        //this.getIdGenres();
    }

    //take us back to MovieList page
    handleClick=()=>{
        // console.log("handle click info button");
        this.props.history.push('/')
    }
    //takes us to the movie edit page
    handleEdit = (id) => {
        console.log('button clicked in handle edit', id);
        this.props.history.push('/edit')
    }
   

    getDetails = () =>{
        console.log("IN GET DETAILS INFO.JSX", this.props.match.params.id)
        this.props.dispatch({type:'GET_DETAILS', payload: this.props.match.params.id})
    }

    // getIdGenres(){
    //     console.log("in GENRE ID GET");
    //     this.props.dispatch({type:'SPEC_GENRES' ,payload: this.props.match.params.id})
        
    // }

    render() {
        return (
            <div className="info">
                <h2>Info</h2>
                <button onClick={this.handleClick}>Back to Movies</button>
                <button onClick={this.handleEdit}>Edit</button>
                {this.props.reduxState.details.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <img src={movie.poster} alt={movie.title}/>
                            <h2>{movie.title}</h2>
                            <h3>Description</h3>
                            <p>{movie.description}</p>

                        </div>
                    )
                })}
                {/* need to display only ones asigned to ids */}
                <h3>Genres:</h3>
               {this.props.reduxState.genres.map((genre, i)=>{
                   return(
                       <p>{genre.name}</p>
                   )
               })}
            </div>
        )//end return
    }// end render
};// end component


const putStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putStateOnProps)(Info));