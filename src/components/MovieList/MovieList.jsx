import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieItem from '../MovieList/MovieList'


class MovieList extends Component{

    componentDidMount(){
        console.log('in MovieList', this.props.movieItem);
        
    }

    render(){
        return(
           <div>
               <ul>
                 {this.props.movieItem.map((movieItem) =>{
                     return(
                         <MovieItem movieItem={movieItem} reduxState={this.props.reduxState}/>
                     )
                 })}
               </ul>
           </div>
        )//end return
    }// end render
};// end component


const putStateOnProps = (reduxState) => ({reduxState})
export default connect(putStateOnProps)(MovieList);