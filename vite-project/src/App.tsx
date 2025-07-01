import { useState, type MouseEvent } from 'react';
// import './App.css';
import { Button } from './components/button/Button';
import Input from './components/input/Input';


function App() {

  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {                 // MouseEvent from react!
    console.log(e);
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <Button appearance='small' onClick={addCounter}>Button</Button>
      <Button appearance='big' onClick={addCounter}>Button</Button>
      <Input placeholder='input here'/>
    </>
  )
}

export default App;

