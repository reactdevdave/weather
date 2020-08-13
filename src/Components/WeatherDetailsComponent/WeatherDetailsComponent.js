import React from 'react';

const weatherDetails = (props) => (

    // Date, City Name, Current time & temperature
    <div>
        <p>{props.newCity}</p>
        <p>5:00pm</p>
        <p>101 F</p>
    </div>
);

export default weatherDetails;