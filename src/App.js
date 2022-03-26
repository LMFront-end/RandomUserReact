import React, {useState} from 'react';
import './App.css';
import { Button } from './components/hero/Button';
import { Header } from './components/header/Header';

import { Title } from './components/hero/Title';

const App = ()  =>{

  //useState
  const [isDark, setDark] = useState(false);
  
  const [activeLink, setActiveLink] = useState(0);

  
  return (
    <div className={`giphos__container ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setDark={setDark} />
      <Title />
      <Button />
    </div>
  );
}

export {App};
