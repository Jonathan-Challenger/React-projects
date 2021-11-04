import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const onClick = async e => {
    e.preventDefault();

    const data = await axios.get(
      "https://v3.football.api-sports.io/teams?league=39&season=2021",
      {
        headers: {
          "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
        },
      }
    );

    console.log(data);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={e => onClick(e)}>Test</button>
      </header>
    </div>
  );
}

export default App;
