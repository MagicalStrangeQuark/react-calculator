import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button className={props.className} onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    );
}

export default Button;