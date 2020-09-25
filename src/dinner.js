import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1> Today we serve {props.dishName} </h1>
            <h1> Also we serve {props.sweetDish} </h1>
        </div>
    );
}

export default Dinner;