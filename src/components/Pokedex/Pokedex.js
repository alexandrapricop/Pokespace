import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Pokedex.css';

function Pokedex(props) {

  const [pokemons,] = useState([]);

  function Pokemon(name, id, height, weight, urlBack, urlFront, type) {
    this.name = name;
    this.id = id;
    this.height = height;
    this.weight = weight;
    this.urlBack = urlBack;
    this.urlFront = urlFront;
    this.type = type;
  }

  const getPokemons = async() => {

    for(let i=1; i<=365; i++){
      const data = await fetch('https://pokeapi.co/api/v2/pokemon/'+i)
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.log('Something went wrong: '+err))
    
      let pokemoni =  new Pokemon(data.name, data.id, data.height, data.weight, data.sprites.back_default, data.sprites.front_default, data.types);
      pokemons.push(pokemoni)

    }
  }

  useEffect( () => {
    getPokemons();
  },[])

  const pokemonList = pokemons.map((poke) => {
    if(poke.name.includes(props.searchResult))
    return <Card id={poke.id} 
    title={poke.name}
    link={poke.urlFront}
    />;
  });

  return (
    <div id='pokedex' className='pokedex'>
      {pokemonList}
    </div>
  );
}

export default Pokedex;
