import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';
import Todo from './views/Todo';


// template + logic
// JSX
//babel

const App = () => { //class

  //state
  let [name, setName] = useState('Eric'); //[a1, b1, c1....]
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Hoi Dan IT Channel' },
    { id: 'todo2', title: 'Doing homework' },
    { id: 'todo3', title: 'Playing game' }
  ]);


  const handleEventClick = (event) => {
    if (!address) {
      alert('emtpy input')
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = { id: 'abc', title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }
  //re-render
  //for for-each => map
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <Todo
          todos={todos}
          title={'All todos'}
        />
        <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
