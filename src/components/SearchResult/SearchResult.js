import React from 'react';
import './SearchResult.css';

function SearchResult(props) {
  return (
        <div className='result'>
            Searching for: <span className='result-text'>{props.result}</span>
        </div>
  );
}

export default SearchResult;
