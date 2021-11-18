import axios from "axios";
import Spinner from "../spinner/Spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamDetail = props => {
  const [teamInfo, setTeamInfo] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    teamInfoData();
    teamStatsData();
  }, []);

  const teamInfoData = async () => {
    const res = await axios.get("https://v3.football.api-sports.io/teams", {
      headers: {
        "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
      },
      params: {
        id: id,
      },
    });

    const teaminfo = res.data.response[0];
    console.log(teaminfo);

    setTeamInfo(teaminfo);
  };

  const teamStatsData = async () => {
    const res = await axios.get(
      "https://v3.football.api-sports.io/teams/statistics",
      {
        headers: {
          "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
        },
        params: {
          team: id,
          league: "39",
          season: "2021",
        },
      }
    );

    const teamstats = res.data.response;
    console.log(teamstats);
    setTeamStats(teamstats);
  };

  return (
    <div className='container-inner'>
      {teamStats.length === 0 ? (
        <Spinner />
      ) : (
        <div className='detail-page'>
          <div className='team-info'>
            {/* @todo create team info component: name, logo, founded, country */}
            <p className='text-white'>{teamInfo.team.name}</p>
            {/* @todo create team venue info: name, city, capacity, img*/}
            <p className='text-white'>{teamInfo.venue.name}</p>
          </div>
          <div className='team-stats'>
            {/* @todo create stats component that holds below stats */}
            <p>Goals for against</p>
            <p>fixtures: played won lost drawn</p>
            <p>League: name, country, logo, flag</p>
            <p>Clean sheet, cards, penalties</p>
            <p>lineups</p>
            <p>form</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDetail;
