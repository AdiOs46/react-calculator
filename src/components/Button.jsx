import React from 'react';

function Button(props) {

    const handleClick = () => {
        console.log(`${props.onButtonClick}`);
    };

    return(
        <button className={`inputButton ${props.setClassName}`} onClick={handleClick}>
            {props.onButtonClick}
        </button>
    );
}

export default Button;