import React from 'react';
import './App.css';
import FruitList from './components/Fruits';
import MeatList from './components/Meats';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Management App</h1>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-around' }}>
        <section>
          <FruitList />
        </section>
        <section>
          <MeatList />
        </section>
      </main>
    </div>
  );
};

export default App;