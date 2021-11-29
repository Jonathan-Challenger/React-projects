import PropTypes from "prop-types";
import ScorerLeague from "./ScorerLeague";
import ScorerTeam from "./ScorerTeam";
import ScorerExtraStats from "./ScorerExtraStats";

const ScorerStats = ({
  scorerStats: { team, shots, passes, league, goals, games, dribbles },
}) => {
  return (
    <div className='stats-info my-1 text-white'>
      {/* <ScorerExtraStats
        shots={shots}
        passes={passes}
        goals={goals}
        games={games}
        dribbles={dribbles}
      /> */}
      <ScorerTeam team={team} />
      <ScorerLeague league={league} />
    </div>
  );
};

ScorerStats.propTypes = {
  scorerStats: PropTypes.object.isRequired,
};

export default ScorerStats;
