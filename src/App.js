import React, { useState } from 'react';
import CardList from './CardList';
import SearchField from './SearchField';
import Scroll from './Scroll';
import { robots as defaultRobots } from './robots';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    const [ robots, setRobots ] = useState(defaultRobots);

    const updateRobots = (event) => {
        const filteredRobots = defaultRobots.filter((robot) => {
            return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        console.log(filteredRobots);
        setRobots(filteredRobots);
    }

    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchField updateRobots={updateRobots} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={robots} showError={false}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    )
}

export default App;