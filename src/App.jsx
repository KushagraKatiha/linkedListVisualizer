// src/App.js
import React from 'react';
import LinkedListVisualizer from './components/LinkedListVisualizer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mainHeading'>Linked List Visualizer</h1>
      </header>
      <LinkedListVisualizer />
    </div>
  );
}


export default App;
