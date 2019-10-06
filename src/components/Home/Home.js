import React, {useState} from 'react';
import './Home.css';
import InstructionCard from '../InstructionCard/InstructionCard';
import {Link} from 'react-router-dom';

function Home() {
    const [instr1,] = useState({
        title: 'Pokédex',
        description: 'Here lies a pokedex which will discover itself to you after you search for a pokemon. Just enter a letter from your pokemon name and you will find what you are looking for. If you want to find more about a certain pokemon, use the pokestat. You will see how pokemons will magically reveal to you as you type.'
    });
    const [instr2,] = useState({
        title: 'Pokéstat',
        description: 'Enter the name of the wanted pokemon and find more (poke)stats about it. See how it looks from different positions, how big or small it is and even its type. Be sure you entered the correct name (which you can check in pokedex) and enrich your general knowledge about pokemons and have fun doing it. '
    });

    return (
        <div className='home'>
            <h1 className='home-title' >Welcome to Pokéspace!</h1>
            <div className='instructions'>
                <Link className='card-link' to='/pokedex'>
                <InstructionCard title={instr1.title} description={instr1.description}/>
                </Link>
                <Link className='card-link'to='/pokestats'>
                <InstructionCard title={instr2.title} description={instr2.description}/>
                </Link>
                
            </div>
        </div>
    );
}

export default Home;
