import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';

// template + logic
// JSX
//babel

const App = () => { //class

  //state
  let [name, setName] = useState('Eric'); //[a1, b1, c1....]
  const [address, setAddress] = useState('');

  const handleEventClick = (event) => {
    console.log(address)
    setName(address);
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }
  //re-render
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
