import React from 'react';
import './StatCard.css';


function StatCard(props) {


    const typeList = props.type.map((item, index) => {

        return <span className={props.type[index].type.name + ' type'}> {props.type[index].type.name}</span>
    })

    return (
        <div className='card'>
            <div className='card-id'><span className='card-subheading'>Pokédex Rank:</span> <span className='id' >{props.id}</span></div>
            <div className='card-title'>{props.title}</div>
            <div className='album'>
                <img className='card-img' src={props.linkF} alt='pokemon' />
                <img className='card-img' src={props.linkB} alt='pokemon' />
            </div>
            <p className='card-text'> <span className='card-subheading'>Height: </span>{props.height}</p>
            <p className='card-text'> <span className='card-subheading'>Weight:  </span>{props.weight}</p>
            <div className='pokemon-type'>
                {typeList}
            </div>
        </div>
    );
}

export default StatCard;
