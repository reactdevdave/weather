// Functional component which will receive props.
import React from 'react';

const weatherButton = (props) => (
    <button type="submit" onClick={props.buttonSubmit}>Submit</button>
)

export default weatherButton;