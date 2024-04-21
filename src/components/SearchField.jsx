import React from 'react';

const SearchField = ({ updateSearchField }) => {
    return (
        <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onInput={updateSearchField}></input>
    )
}

export default SearchField;