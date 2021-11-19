import axios from "axios";
import Spinner from "../spinner/Spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamInfo from "./TeamInfo";
import VenueInfo from "./VenueInfo";
import TeamStats from "./TeamStats";

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
          <div className='basic-info'>
            <TeamInfo teamInfo={teamInfo} />
            <VenueInfo teamInfo={teamInfo} />
          </div>
          <div className='team-stats'>
            <TeamStats teamStats={teamStats} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDetail;