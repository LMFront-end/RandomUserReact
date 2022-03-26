/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button } from './Button'


const Title = () => {
    return (
        <div className="App">
            <h1 className="app__title btn btn-outline-dark  ms-3">
                Random User Generator App
            </h1>

            <Button />
        </div>
    )
}

export {Title}