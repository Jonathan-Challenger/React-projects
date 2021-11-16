import Spinner from "../spinner/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import StandingItem from "./StandingItem";

const StandingCont = props => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    standingsData();
  }, []);

  const standingsData = async () => {
    const res = await axios.get("https://v3.football.api-sports.io/standings", {
      headers: {
        "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
      },
      params: {
        season: "2021",
        league: "39",
      },
    });

    const standings = res.data.response[0].league;
    console.log(standings);
    setStandings(standings);
  };

  const teamStandings = standings.standings;

  return (
    <div className='container-inner'>
      {standings.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <h2 className='text-center large text-primary'>Standings</h2>
          <div className='league-cont my-2'>
            <h3 className='text-primary lead'>{standings.name}</h3>
            <img src={standings.logo} alt='Premier League logo' />
          </div>
          <div className='items-cont'>
            {teamStandings[0].map(item => (
              <StandingItem
                key={item.team.id}
                standings={standings}
                item={item}
              />
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default StandingCont;
