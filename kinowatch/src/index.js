import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import routes from './routes'
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import history from './history';

// Store & Api
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/reducers';
import sagaWatcher from './sagas/sagas';
import {ActionType} from './store/action-types';

// Components

const sagaMiddleware  = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaWatcher);
const action = type => store.dispatch({type});
action(ActionType.FETCH_INITIAL_DATA);


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {routes}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

