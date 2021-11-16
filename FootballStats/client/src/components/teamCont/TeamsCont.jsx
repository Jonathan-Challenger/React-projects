import { useEffect, useState } from "react";
import TeamItem from "../teamItem/TeamItem";
import axios from "axios";
import Spinner from "../spinner/Spinner";

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
    <div className='container-inner'>
      {teams.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <h2 className='text-center large text-primary'>Teams</h2>
          <div className='items-cont'>
            {teams.map(({ team }) => (
              <TeamItem team={team} key={team.id} />
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default TeamCont;
