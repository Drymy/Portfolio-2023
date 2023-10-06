import './App.css';
import React, { useState } from 'react';
import { Main } from './components/main';
import { Header } from './components/header';
import { SquareGenerator } from './components/squaresbg';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#2f353b');
  
  return (
    <div className="App" style={{ backgroundColor }}>
        <Header />
        <SquareGenerator />
        <Main backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
    </div>
  );
}

export default App;
