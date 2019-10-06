import React from 'react';
import './InstructionCard.css';

function InstructionCard(props) {

    return (
        <div className='instruction-card'>
            <h1 className='instruction-title'>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default InstructionCard;
