import React from 'react';

const SearchField = ({ updateRobots }) => {
    return (
        <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={updateRobots}></input>
    )
}

export default SearchField;