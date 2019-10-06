import React from 'react';
import './Card.css';


function Card(props) {
  return (
        <div className='card'>
            <div className='card-id'>Pokédex Rank: <span className='id' >{props.id}</span></div>
            <div className='card-title'>{props.title}</div>
            <img className='card-img' src={props.link} alt='pokemon'/>
        </div>
  );
}

export default Card;
