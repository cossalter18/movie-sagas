import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Edit extends Component {

    state={
        movie:{
            id: '',
            title: '',
            description: ''
        }
    }

    handleChange=(event) => {
        console.log('IN HANDLECHANGE');
        
        this.setState({
            movie: {
                ...this.state.movie,
              [event.target.name]: event.target.value
            }
        })
    }
   
handleClick =()=>{
    this.props.history.push('/')
}

handleCancel=()=>{
    this.props.history.push('/')
}

handleUpdate = () => {
    console.log('clicked handleUpdate')
    this.props.dispatch({type: 'UPDATE_MOVIE', payload: this.state.movie})
    this.setState({
        state: this.state
    })
    this.props.history.push(`/`)
}
    render() {
        return (
            <>
            <div className="info">
                <h2>Info</h2>
                <button onClick={this.handleClick}>Back to Movies</button>
                {this.props.reduxState.details.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <img src={movie.poster} />
                        </div>
                    )// end map return

                }// end return;
                )// end param;
                } 
            </div>
        
            <input type="text" placeholder="Update Title" name="title" onChange={(event) => this.handleChange(event, "title")}></input>
            <br/>
            <br/>
            <textarea placeholder="Update Movie Synopsis" name="title" onChange={(event) => this.handleChange(event, "description")}></textarea>
            <br/>
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.handleUpdate}>Submit</button>
            </>




        )//end return
    }// end render
};// end component


const putStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putStateOnProps)(Edit));