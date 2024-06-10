import React from 'react'
import './Button.css';

const Button = ({children,onClick,type='button'}) => {
    return (
        <button className="button" onClick={onClick} type={type}>
            <div class="text">
                {children}
            </div>
        </button>
    )
}

export default Button


