import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {App} from './App';
import AnimePage from './components/AnimePage/AnimePage';
import NewPage from './components/NewPage/NewPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import ListPage from './components/ListPage/ListPage';
import HomePage from './components/HomePage/HomePage';
import routeConfig from './config/routes';
import ItemPage from './components/ItemPage/ItemPage'
const WrappedComponent = (Component) => () =>(
    <App>
        <Component/>
    </App>
);

export default(
<Switch>
    <Route
    exact = {true}
    path={routeConfig.INDEX}
    component = {WrappedComponent(HomePage)}
    />
    <Route
    exact = {true}
    path={routeConfig.HOME}
    component = {WrappedComponent(HomePage)}
    />
   
    <Route 
    exact = {true}
    path={routeConfig.NEW}
    component = {WrappedComponent(NewPage)}
    />
    <Route
    exact = {true}
    path={routeConfig.MOVIES}
    component = {WrappedComponent(MoviesPage)}
    />
    <Route 
    exact = {true} 
    path={routeConfig.ANIME}
    component = {WrappedComponent(AnimePage)}
    />
    <Route
    exact = {true} 
    path={routeConfig.LIST}
    component = {WrappedComponent(ListPage)}
    />
    <Route
    exact = {true} 
    component = {WrappedComponent(ItemPage)}
    />
</Switch>
)