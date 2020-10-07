import React from 'react';

const Card = props =>
  <>
    { <div className="card" style={{ width: '18rem', marginBottom: '5rem' }}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">{props.btntext}</a>
      </div>
    </div>}
  </>

export default Card;
