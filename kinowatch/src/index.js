import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import routes from './components/route/route'
import {  BrowserRouter as Router} from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <Router>
      {routes}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
