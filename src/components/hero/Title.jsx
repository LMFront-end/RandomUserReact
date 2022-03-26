/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import axios from 'axios';
import { Button } from './Button'


const Title = () => {

    const [activeUser, setActiveUser] = useState(false);
    const [userData, setUserData] = useState([]); 
    const [loading, setLoading] = useState(false);


    const onClickHandler = () => {

        setLoading(true);
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            console.log(response.data.results);
            setUserData(response.data.results);
        }).catch((error) => {
            setLoading(true);
        }).finally(() => {
            setLoading(false);
            setActiveUser(true)
        })
    }

    return (
        <div className="App">
            <h1 className="app__title btn btn-outline-dark  ms-3">
                Random User Generator App
            </h1>

            <Button isActive={activeUser} clicked={onClickHandler}/>
            {loading ? (
                <h1>Loading...</h1>
            ):(
                <div className="app__user">

                </div>
            )
        
        }
        </div>
    )
}

export {Title}