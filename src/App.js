import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';

// template + logic
// JSX
//babel

const App = () => {
  let name = 'Eric'; //string
  let number = 2021;
  let obj = { name: 'ERic', channel: 'Hoi Dan IT' };
  let link = 'https://www.youtube.com/watch?v=frVHVZDpsp4&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E';

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <p style={{ color: 'red', fontSize: '20px', marginTop: '15px' }}>{JSON.stringify(obj)}</p>
        <a href={link} target="_blank"  >Visit my channel</a>
      </header>
    </div>

  );
}

export default App;
