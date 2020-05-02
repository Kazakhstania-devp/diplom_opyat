import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {App} from './App';
import AnimePage from './components/AnimePage/AnimePage';
import NewPage from './components/NewPage/NewPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import ListPage from './components/ListPage/ListPage';
import HomePage from './components/HomePage/HomePage';
import routeConfig from './config/routes';

const WrappedComponent = (Component) => () =>(
    <App>
        <Component/>
    </App>
);

export default(
<Switch>
    <Route
    exact = {true}
    path="/"
    component = {WrappedComponent(HomePage)}
    />
    <Route
    exact = {true}
    path="/Home"
    component = {WrappedComponent(HomePage)}
    />
   
    <Route 
    exact = {true}
    path="/New"
    component = {WrappedComponent(NewPage)}
    />
    <Route
    exact = {true}
    path="/Movies"
    component = {WrappedComponent(MoviesPage)}
    />
    <Route 
    exact = {true} 
    path="/Anime"
    component = {WrappedComponent(AnimePage)}
    />
    <Route
    exact = {true} 
    path="/ListPage"
    component = {WrappedComponent(ListPage)}
    />
</Switch>
)