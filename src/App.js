import './App.css';
import React, { useState } from 'react';
import { Main } from './components/main';
import { Header } from './components/header';
import { SquareGenerator } from './components/squaresbg';
import { ImagePreloader } from './components/imagePreloader';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#2f353b');

  return (
    <div className="App" style={{ backgroundColor }}>
      <ImagePreloader /> 
      <Header />
      <SquareGenerator />
      <Main backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
    </div>
  );
}

/*Bonjour à vous si vous venez depuis mon Github!*/
/*Hello if you're coming from my Github!*/

export default App;
