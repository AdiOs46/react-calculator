import React from 'react';

function Button(props) {
    return(
        <button className={`inputButton c${props.onButtonClick}`}>{props.onButtonClick}</button>
    );
}

export default Button;