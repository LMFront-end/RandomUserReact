/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Button = ({isActive, clicked}) => {
    return (
        <div>
            
            <button onClick={clicked}>
                {isActive ? "get another user" : "get user" }<i className="fa fa-user-plus me-1"></i> 
            </button>

        </div>
    )
}

export {Button}