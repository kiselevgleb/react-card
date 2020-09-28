import React from 'react';

const Card = props =>
  <>
    {props.todo.map((card) =>
      <div className="card" style={{ width: '18rem', marginBottom: '5rem' }}>
        <img src={card.img} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <a href="#" className="btn btn-primary">{card.btntext}</a>
        </div>
      </div>)}
  </>
export default Card;
