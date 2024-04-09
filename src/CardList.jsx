import React from 'react';
import Card from './Card';

const CardList = ({ robots, showError=false }) => {
    if (showError) {
        throw new Error('Throwing an error');
    }
    return (
        <div>
            {
                robots.map((robot, index) => {
                    return <Card key={index} name={robot.name} email={robot.email} id={robot.id} />;
                })
            }
        </div>
    );
}

export default CardList;