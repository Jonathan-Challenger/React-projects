import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import TeamItem from "./components/teamItem/TeamItem";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    homeData();
  }, []);

  const homeData = async () => {
    const res = await axios.get("https://v3.football.api-sports.io/teams", {
      headers: {
        "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
      },
      params: {
        season: "2021",
        league: "39",
      },
    });

    const teams = res.data.response;

    setTeams(teams);
  };

  /* const standingData = async e => {
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
  }; */

  return (
    <>
      <Navbar />
      <section className='container'>
        <h1 className='heading1'>Premier League Statistics</h1>
        <div className='container'>
          <h2 className='heading2'>Teams</h2>
          {teams.map(({ team }) => (
            <TeamItem team={team} key={team.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
