import React, { useRef } from 'react';

function Input({ label = {}, attributes, reference }) {
    return (
        <>
            <label htmlFor={label.for}>
                {label.text}
                <input {...attributes} ref={reference}/>
            </label>
        </>
    )
}

export default Input;
