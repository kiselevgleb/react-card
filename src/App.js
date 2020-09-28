import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  const todos = [{ img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/composition/cards/assets/card2.png', title: 'Special title treatment', text: 'With supporting text below as a natural lead-in to additional content.', btntext: 'Go somewhere' },
  { img: '', title: 'Card title', text: 'With supporting text below as a natural lead-in', btntext: 'Go somewhere!' }];
  return (
    <div className="App">
      <Card todo={todos}></Card >
    </div>
  );
}

export default App;
