import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <h1>Welcome to BackBurner</h1>
          <h2>Add your tasks...</h2>
          <h2>Check off as you do...</h2>
          <h2>Level-Up!!!</h2>
        </main>
      </div>
    )
  }
}

