import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TeamsCont from "./components/teamCont/TeamsCont";

const App = () => {
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
      <section className='page'>
        <h1 className='text-center x-large py-5'>Premier League Statistics</h1>
        <div className='container-inner'>
          <TeamsCont />
        </div>
      </section>
    </>
  );
};

export default App;
