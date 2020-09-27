import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <div className="main">
      <div className="header">
        <a href="/" className="logo">CakeStation</a>
        <div className="header-right">
          <a href="/cakes">View all Cakes</a>
          <a href="/cakes/mine">View Your Cakes</a>
          <a href="/cakes/new">Add your own Cake</a>
        </div>
      </div>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
