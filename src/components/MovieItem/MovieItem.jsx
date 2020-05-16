import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {

    componentDidMount() {
        console.log('XXXXXXXXXXXXXXXXXXXXXX');

    }

    render() {
      
        return (
            <div>
             <h2>MOVIEITEM.JSX</h2>
            </div>
            
               
          
        )//end return
    }// end render
};// end component


const putStateOnProps = (reduxState) => ({ reduxState })
export default connect(putStateOnProps)(MovieItem);