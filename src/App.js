import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  const todos = [{ img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/composition/cards/assets/card2.png', title: 'Special title treatment', text: 'With supporting text below as a natural lead-in to additional content.', btntext: 'Go somewhere' },
  { img: '', title: 'Card title', text: 'With supporting text below as a natural lead-in', btntext: 'Go somewhere!' }];
  const listCards = todos.map((card) =>
    <div className="card" style={{ width: '18rem', marginBottom: '5rem'}}>
      <img src={card.img} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.text}</p>
        <a href="#" className="btn btn-primary">{card.btntext}</a>
      </div>
    </div>);
    // < Card > { card }</Card >);

  return (
    <div className="App">
      < Card>{listCards}</Card >  
    </div>
  );
}

export default App;
