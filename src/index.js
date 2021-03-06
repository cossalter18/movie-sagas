import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies)
    yield takeEvery('GET_DETAILS', getDetails)
    yield takeEvery('UPDATE_MOVIE', updateMovie)
    yield takeEvery('GET_GENRES', getGenre)

}

//SAGA to GET movies
function* getMovies() {
    try {
        const response = yield axios.get('/movie');
        yield put({ type: 'SET_MOVIES', payload: response.data })
    }
    catch (error) {
        console.log('ERROR in GET', error);
    }
}

function* getGenre(){
    try{
        const response = yield axios.get('/genres');
        yield put({type: 'SET_GENRES', payload: response.data})
        console.log("GET GENRE RESPONSE:", response);
    }
    catch(error){
        console.log('Error in GENRE GET', error)
    }
}

function* getDetails(action) {
    try {
        const response = yield axios.get(`/movie/info/${action.payload}`)
        yield put({ type: 'SET_DETAILS', payload: response.data })
    } catch (err) {
        console.log(err);
    }
}

function* updateMovie(action) {
    console.log('UpdateMovie', action.payload.id);
    try {
        const response = yield axios.put(`/movie/${action.payload.id}`, {title: action.payload.title, description: action.payload.description})
        console.log('in updateMovie PUT', response);
        //yield put({type: 'SET_MOVIES', payload: response.data})
    } catch (error) {
        console.log(error);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware(rootSaga);

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload
        default:
            return state
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
