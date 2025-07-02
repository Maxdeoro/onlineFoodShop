import { useState, type MouseEvent } from 'react';
// import './App.css';
import { Button } from './components/button/Button';
import Input from './components/input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/menu/Menu';
import { Cart } from './pages/cart/Cart';
import { Error } from './pages/error/Error';


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
      <div>
        <a href='/'>Menu</a><br/>
        <a href='/cart'>Cart</a>
      </div>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;

