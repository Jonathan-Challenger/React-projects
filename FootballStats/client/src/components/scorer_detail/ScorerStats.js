import PropTypes from "prop-types";
import ScorerLeague from "./ScorerLeague";
import ScorerTeam from "./ScorerTeam";
import ScorerExtraStats from "./ScorerExtraStats";

const ScorerStats = ({ scorerStats: { statistics } }) => {
  return (
    <div className='stats-info my-1 text-white'>
      <ScorerExtraStats
        shots={statistics[0].shots}
        passes={statistics[0].passes}
        goals={statistics[0].goals}
        games={statistics[0].games}
        dribbles={statistics[0].dribbles}
      />
      <ScorerTeam team={statistics[0].team} />
      <ScorerLeague league={statistics[0].league} />
    </div>
  );
};

ScorerStats.propTypes = {
  scorerStats: PropTypes.object.isRequired,
};

export default ScorerStats;
