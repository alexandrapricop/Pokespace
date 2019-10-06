import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
        <div className='search'>
            <input type='text' placeholder='Pokemon name here' onChange={props.search}/>
        </div>
  );
}

export default SearchBar;
