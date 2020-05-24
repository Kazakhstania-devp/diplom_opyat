import React from 'react';
import './App.css';
import Header from './components/layout/Header'

export const App = ({ children }) => {  
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
    </div>
  );
};


