import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {

    componentDidMount() {
        console.log('XXXXXXXXXXXXXXXXXXXXXX');

    }

    render() {
        console.log("MOVIE ITEM------------------------------->>>>>", this.props.reduxState)
        const title= this.props.reduxState.title
        return (
            <div>
               <p>{JSON.stringify(this.props.movieItem)}</p>
            </div>
            
               
          
        )//end return
    }// end render
};// end component


const putStateOnProps = (reduxState) => ({ reduxState })
export default connect(putStateOnProps)(MovieItem);