import PropTypes from "prop-types";

const ScorerGoals = ({ goals }) => {
  return (
    <div className='p-1'>
      <p className='lead text-center'>Goals</p>
      <div className='scorer-stats-cont'>
        <p>Goals scored: {goals.total}</p>
        <p>Assists: {goals.assists}</p>
      </div>
    </div>
  );
};

ScorerGoals.propTypes = {
  goals: PropTypes.object,
};

export default ScorerGoals;
