import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './PokestatContainer.css';
import Pokestat from '../Pokestat/Pokestat';

function PokestatContainer() {

    const [input, setInput] = useState();

    function search(event) {
        setInput(event.target.value.toLowerCase());
    }
    return (
        <div>
            <SearchBar search={search}/>
            <Pokestat searchResult={input}/>
        </div>
    );
}

export default PokestatContainer;
