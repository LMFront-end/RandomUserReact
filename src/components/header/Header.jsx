import React from 'react'
import {LinkLogo} from './LinkLogo';

import darkTheme from '../images/darkTheme.png';
import lightTheme from '../images/lightTheme.png';

import styles from './Header.module.css'

const Header = (props) => {

    const handleDarkTheme = () => {
        props.setDark(!props.isDark);
    };
    
    return (
        <header className={styles.header}>
        {props.isDark ? (

    <LinkLogo src={darkTheme} alt="logo-darkTheme" />
    ) : (
    <LinkLogo src={lightTheme} alt="logo-darkTheme" />   
    ) 
    }
    <button className={styles.header__button} onClick={handleDarkTheme}>{` ${
        props.isDark ? "Light 🌞" : "Dark 🌜"
        } Mood `}</button>
    </header>
    )
    }

export {Header}