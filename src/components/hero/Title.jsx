/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, Fragment, useEffect} from 'react'
import axios from 'axios';
import { Button } from './Button'
import { URL_API } from '../../utils/Data';



const Title = () => {

    const initialState = {
        id: null,
        picture: "",
        userName: "",
        userEmail: "",
        userWasBorn: "",
        phone: "",
        userPassword: "",
        timeStamp: null
    }

    const [activeUser, setActiveUser] = useState(false);
    const [userData, setUserData] = useState(initialState); 
    const [loading, setLoading] = useState(false);
    const [activeLink, setActiveLink] = useState(0);

    


    /* icons */
    const icons = [
        "fas fa-user fa-4x",
        "fas fa-envelope fa-4x",
        "fas fa-calendar-alt fa-4x",
        "fas fa-map-pin fa-4x",
        "fas fa-phone fa-4x",
        "fas fa-lock fa-4x",
    ]


    const PhraseGenerator = ({user}) => {

        const phrase = [
            `My user name is ${user.userName} do you want to meet me?`,
            `My email address is ${user.userEmail}`,
            `I was born on ${user.userWasBorn}`,
            `I live in ${user.country}`,
            `My phone number ${user.phone} talk to me`,
            `My code chat is ${user.userPassword}`
        ]
    
        return (
            <div className="phrase">{phrase[activeLink]}</div>
        )
    }


    const onClickHandler = () => {

        setActiveLink(0)
        setLoading(true);

        axios.get('https://randomuser.me/api/')
            .then((response) => {
                    setUserData({
                    ...userData,
                    picture: response.data.results[0].picture.large,
                    userEmail: response.data.results[0].email,
                    userWasBorn: response.data.results[0].dob.date.slice(0, 10),
                    country: response.data.results[0].location.country,
                    phone: response.data.results[0].phone,
                    userPassword: response.data.results[0].login.password
                });

        }).catch((error) => {

            setLoading(true);

        }).finally(() => {

            setLoading(false);
            setActiveUser(true)
        })
        .then(
            axios.post(URL_API + "/createUserName/10", userData)
                .then((response) => {
            setUserData({
                ...userData,
                userName: response.data.userName,
                timeStamp: response.data.timeStamp
            })
        }).catch((error) => {

            setLoading(true);

        }).finally(() => {

            setLoading(false);
            setActiveUser(true)
        }))

        console.log(userData)

    }

    const activeLinkHandler = (index) => {
        setActiveLink(index);
    }

    return (
        <div className="App">
            <h1 className="app__title btn btn-outline-dark  ms-3">
                Random User Generator App <i className="fa-solid fa-comment"></i>
            </h1>

            <Button isActive={activeUser} clicked={onClickHandler}/>
            {loading ? (
                <h1>Loading...</h1>
            ):(
                <div className="app__user">
                    <Fragment key={userData.id}>
                    <img src={userData.picture} alt=""/>
                        <PhraseGenerator user={userData}/>

                        <div className="app__icons">
                            {icons.map((icon, index) => {
                                return(
                                    <i className={icon} key={index} onMouseEnter={() => activeLinkHandler(index)}></i>
                                )
                            })}
                        </div>
                    </Fragment>
            </div>
        )
        
        }
        </div>
    )
}

export {Title}