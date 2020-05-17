import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { HashRouter, Route} from 'react-router-dom'

//import components for HashRouter
import Info from '../Info/Info'
import MovieList from '../MovieList/MovieList';
import EditPage from '../EditPage/EditPage'


class App extends Component {
  // Renders the entire app on the DOM


  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={MovieList} />
          <Route path="/info/:id" render={({ item }) => <Info item={item} />} />
          <Route path="/edit" component={EditPage}/>
          {/* <Route path="Info/:id" render={(props) => <Info {...props} dispatch={this.props.dispatch} reduxState={this.props.reduxState} />}></Route> */}
        </div>
      </HashRouter>
    );
  }
}


const putStateOnProps = (reduxState) => ({ reduxState })
export default connect(putStateOnProps)(App);
