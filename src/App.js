import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  
  return (
    <div className="App">
      <Card title="Card title" text="With supporting text below as a natural lead-in to additional content." btntext="Go somewhere!" />
      <Card title="Special title treatment" text="With supporting text below as a natural lead-in" btntext="Go somewhere!">
        <img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/composition/cards/assets/card2.png" />
      </Card>
    </div>
  );
}

export default App;
