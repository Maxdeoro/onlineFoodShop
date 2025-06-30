import { useState, type MouseEvent } from 'react';
// import './App.css';
import { ButtonAlt } from './components/button/Button';


function App() {

  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {                 // MouseEvent from react!
    console.log(e);
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <ButtonAlt onClick={addCounter}>ButtonAlt</ButtonAlt>
    </>
  )
}

export default App;

