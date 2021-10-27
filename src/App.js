import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Countdown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// template + logic
// JSX
//babel

const App = () => { //class

  //state
  let [name, setName] = useState('Eric'); //[a1, b1, c1....]
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Hoi Dan IT Channel', type: 'eric' },
    { id: 'todo2', title: 'Doing homework', type: 'eric' },
    { id: 'todo3', title: 'Playing game', type: 'hoidanit' },
    { id: 'todo4', title: 'Reading books', type: 'hoidanit' }
  ]);

  //didmount
  useEffect(() => {
    // console.log('run use effect')
  }, [address]);

  useEffect(() => {
    // console.log('run use effect todos')
  }, [todos]);


  const handleEventClick = (event) => {
    if (!address) {
      alert('emtpy input')
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = {
      id: Math.floor((Math.random() * 100000) + 1),
      title: address,
      type: 'eric'
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    // alert('times up')
  }
  //re-render
  //for for-each => map
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown onTimesup={onTimesup} />
            <span>---------------------</span>
            <NewCountDown onTimesup={onTimesup} />

          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'All todos'}
              deleteDataTodo={deleteDataTodo}
            />
            <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
            <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
