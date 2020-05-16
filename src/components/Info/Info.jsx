import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'


class Info extends Component {

    componentDidMount() {
        console.log('in Info COMPONENTDIDMOUT');
        this.getDetails()
    }

    handleClick=()=>{
        // console.log("handle click info button");
        this.props.history.push('/')
    }

    handleEdit = () => {
        console.log('button clicked in handle edit');
        this.props.history.push('/edit')
    }
   

    getDetails = () =>{
        console.log(this.props.match.params.id)
        this.props.dispatch({type:'GET_DETAILS', payload: this.props.match.params.id})
    }

    render() {
        return (
            <div className="info">
                <h2>Info</h2>
                <button onClick={this.handleClick}>Back to Movies</button>
                <button onClick={this.handleEdit}>Edit</button>
                {this.props.reduxState.details.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <img src={movie.poster}/>
                            <h2>{movie.title}</h2>
                            <h3>Description</h3>
                            <p>{movie.description}</p>

                        </div>
                    )
                })}
            </div>





        )//end return
    }// end render
};// end component


const putStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putStateOnProps)(Info));