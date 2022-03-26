import React, {useState} from 'react';
import './App.css';
import { Header } from './components/header/Header';

import { Title } from './components/hero/Title';

function App() {

  //useState
  const [isDark, setDark] = useState(false);

  return (
    <div className={`giphos__container ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark} setDark={setDark} />
      <Title />
    </div>
  );
}

export default App;
