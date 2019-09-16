import React from 'react';

import './App.css';
import List from './components/List';



function App() {
  return (
    <main className="App" aria-label="app-start" role="main">
      <header className="App-header">
        <h1 aria-label="TaDone!" style={{ textAlign: 'center' }}>
          TaDone!
        </h1>
        <List />
      </header>
    </main>
  );
}

export default App;
