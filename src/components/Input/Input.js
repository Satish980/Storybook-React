import React from 'react'
import './Input.css'

function Input(props) {
    const {variant="medium",children, ...rest} = props;
    return (
        <input type='text' className={`input ${variant}`} {...rest} placeholder={`${children}`}/>
    )
}

export default Input
