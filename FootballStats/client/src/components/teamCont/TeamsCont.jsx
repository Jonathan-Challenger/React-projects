import { useEffect, useState } from "react";
import TeamItem from "../teamItem/TeamItem";
import axios from "axios";
import "./teamscont.css";

const TeamCont = () => {
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

  return (
    <>
      <h2 className='text-center large'>Teams</h2>
      <div className='teams-cont'>
        {teams.map(({ team }) => (
          <TeamItem team={team} key={team.id} />
        ))}
      </div>
    </>
  );
};

export default TeamCont;
