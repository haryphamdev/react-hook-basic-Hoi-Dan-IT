import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';

// template + logic
// JSX
//babel

const App = () => { //class
  let name = 'Eric'; //string

  const handleEventClick = (event) => {
    console.log('>>> click me', event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <input type="text" value="Eric" onClick={(event) => handleEventClick(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
