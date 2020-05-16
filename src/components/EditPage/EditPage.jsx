import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import autosize from 'autosize'

class Edit extends Component {

    componentDidMount(){
        this.textarea.focus();
        autosize(this.textarea)
    }

handleClick =()=>{
    this.props.history.push('/')
}

handleCancel=()=>{
    this.props.history.push('/')
}

handleSubmit = () => {
    console.log('clicked handleSubmit')
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
        
            <input type="text" placeholder="Update Title"></input>
            <br/>
            <br/>
            <textarea placeholder="Update Movie Synopsis"></textarea>
            <br/>
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.handleSubmit}>Submit</button>
            </>




        )//end return
    }// end render
};// end component


const putStateOnProps = (reduxState) => ({ reduxState })
export default withRouter(connect(putStateOnProps)(Edit));