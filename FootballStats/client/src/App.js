import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";

function App() {
  const homeData = async e => {
    e.preventDefault();

    const data = await axios.get("https://v3.football.api-sports.io/teams", {
      headers: {
        "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
      },
      params: {
        season: "2021",
        league: "39",
      },
    });
    console.log(data);
  };

  const standingData = async e => {
    e.preventDefault();

    const data = await axios.get(
      "https://v3.football.api-sports.io/standings",
      {
        headers: {
          "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
        },
        params: {
          season: "2021",
          league: "39",
        },
      }
    );
    console.log(data);
  };

  const scorerData = async e => {
    e.preventDefault();

    const data = await axios.get(
      "https://v3.football.api-sports.io/players/topscorers",
      {
        headers: {
          "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
        },
        params: {
          season: "2021",
          league: "39",
        },
      }
    );
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <section className='container'>
        <h1>Football Stats App</h1>
        <button onClick={e => homeData(e)}>Test home data</button>
        <button onClick={e => standingData(e)}>Test standings data</button>
        <button onClick={e => scorerData(e)}>Test scorers data</button>
      </section>
    </>
  );
}

export default App;
