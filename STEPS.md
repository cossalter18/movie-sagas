
-------------------------------------------------
                SAGAS

[X] npm install redux-saga
[X] import saga and sagaMiddleware on index.js


    import {takeEvery, put} from 'redux-saga/effects';
    import createSagaMiddleware from 'redux-saga;'

[X] create sagaMiddleware const

    const sagaMiddleware = createSagaMiddleware();

[X] add sagaMiddleware to applyMiddleware()

    applyMiddleware( logger, sagaMiddleware)

[X] create generator function in index.js
    
    function* watcherSaga(){

    }

[X] add watcherSaga to createSagaMiddleware();

    const sagaMiddleware = createSagaMiddleware(watcherSaga);

[X] install axios and import to index.js

    npm install axios

    import axios from 'axios';



