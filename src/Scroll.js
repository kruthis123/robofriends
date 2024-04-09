import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '630px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;