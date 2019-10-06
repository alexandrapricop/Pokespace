import React, {useState} from 'react';
import Pokedex from '../Pokedex/Pokedex';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import './PokedexContainer.css';

function PokedexContainer() {
    const [input, setInput] = useState();

    function search(event) {
        setInput(event.target.value.toLowerCase());
    }

    


    return (
        <div className='container'>
            <SearchBar search={search}/>
            <SearchResult result={input} />
            <Pokedex searchResult={input}/>
        </div>
    );
}

export default PokedexContainer;
