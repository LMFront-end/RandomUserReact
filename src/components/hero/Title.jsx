/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, Fragment} from 'react'
import axios from 'axios';
import { Button } from './Button'


const Title = () => {

    const [activeUser, setActiveUser] = useState(false);
    const [userData, setUserData] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [activeLink, setActiveLink] = useState(0);

    /* icons */
    const icons = [
        "fas fa-user fa-4x",
        "fas fa-envelope fa-4x",
        "fas fa-calendar-alt fa-4x",
        "fas fa-marker fa-4x",
        "fas fa-phone fa-4x",
        "fas fa-lock fa-4x",
    ]


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
                    {userData.map((user) => {
                        return (
                            <Fragment key={user.id.value}>
                                <img src={user.picture.large} alt="#"/>
                                <div className="app__icons">
                                    {icons.map((icon, index) => {
                                        return(
                                            <i className={icon} key={index}></i>
                                        )
                                    })}
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
            )
        
        }
        </div>
    )
}

export {Title}