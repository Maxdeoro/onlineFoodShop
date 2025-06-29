// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Button, { ButtonAlt } from './components/button/Button';
import './App.css';
import { ButtonAlt } from './components/button/Button';


function App() {

  return (
    <>
      <ButtonAlt onClick={() => console.log('clicked alt')}>ButtonAlt</ButtonAlt>
    </>
  )
}

export default App;

