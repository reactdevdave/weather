import React from 'react';

const weatherDetails = (props) => {

    return (

        props.weatherData.map((v, i) => {
            return (
                <div key={i}>
                    <p>Date: {v[i].Date}</p>
                    <p>Time: {v[i].Time}</p>
                    <p>Temperature: {v[i].temprature} F</p>
                </div>
            )
        })
    );
};
export default weatherDetails;