import React, {useState} from 'react';
import './App.css';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Title } from './components/hero/Title';

const App = ()  =>{

  //useState
  const [isDark, setDark] = useState(false);
  

  return (
    <div className={`giphos__container ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setDark={setDark} />
      <Title />
      <Footer />
    </div>
  );
}

export {App};
