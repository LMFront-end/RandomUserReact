/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Button } from './Button'


const Title = () => {

    const [activeUser, setActiveUser] = useState(false);

    const onClickHandler = () => {
        console.log("funciona");
    }

    return (
        <div className="App">
            <h1 className="app__title btn btn-outline-dark  ms-3">
                Random User Generator App
            </h1>

            <Button isActive={activeUser} clicked={onClickHandler}/>
        </div>
    )
}

export {Title}