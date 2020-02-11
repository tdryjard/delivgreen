import React from 'react';

function Input({ label = {}, attributes }) {
    return (
        <>
            <label htmlFor={label.for}>
                {label.text}
                <input {...attributes}/>
            </label>
        </>
    )
}

export default Input;
