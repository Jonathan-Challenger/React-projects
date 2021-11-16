import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import ScorerItem from "./ScorerItem";

const ScorersCont = () => {
  const [scorers, setScorers] = useState([]);

  useEffect(() => {
    scorersData();
  }, []);

  const scorersData = async () => {
    const res = await axios.get(
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

    const scorers = res.data.response;
    setScorers(scorers);
  };

  return (
    <div className='container-inner'>
      {scorers.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <h2 className='text-center large text-primary'>Top Scorers</h2>
          <div className='items-cont'>
            {scorers.map(({ player, statistics }) => (
              <ScorerItem
                player={player}
                statistics={statistics}
                key={player.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ScorersCont;
