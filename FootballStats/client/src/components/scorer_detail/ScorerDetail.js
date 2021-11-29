import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import ScorerInfo from "./ScorerInfo";
import ScorerStats from "./ScorerStats";

const ScorerDetail = () => {
  const [scorerInfo, setScorerInfo] = useState({});
  const [scorerStats, setScorerStats] = useState({});

  const { id } = useParams();
  const paramsId = Number(id);

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

    const scorers = await res.data.response;
    const getPlayer = await scorers.filter(
      player => player.player.id === paramsId
    );
    const playerInfo = await getPlayer[0].player;
    const playerStats = await getPlayer[0].statistics[0];
    setScorerInfo(playerInfo);
    setScorerStats(playerStats);
  };

  return (
    <div className='container-inner'>
      {scorerStats === undefined ? (
        <Spinner />
      ) : (
        <>
          <div className='basic-info'>
            <ScorerInfo scorerInfo={scorerInfo} />
            <ScorerStats scorerStats={scorerStats} />
          </div>
        </>
      )}
    </div>
  );
};

export default ScorerDetail;
