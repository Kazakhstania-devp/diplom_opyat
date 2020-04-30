import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import App from '../../App';
import AnimePage from '../AnimePage/AnimePage';
import NewPage from '../NewPage/NewPage';
import MoviesPage from '../MoviesPage/MoviesPage';
import ListPage from '../ListPage/ListPage';
import HomePage from '../HomePage/HomePage';

// const WrappedComponent = (Component: React.ComponentType) => () =>(
//     <App>
//         <Component/>
//     </App>
// );

export default(
<Switch>
    <Route exact path="/">
        <HomePage />
    </Route>
    <Route exact path="/New">
        <NewPage />
    </Route>
    <Route exact path="Movies/">
        <MoviesPage />
    </Route>
    <Route exact path="/Anime">
        <AnimePage />
    </Route>
    <Route exact path="/Mylist">
        <ListPage />
    </Route>
</Switch>
)