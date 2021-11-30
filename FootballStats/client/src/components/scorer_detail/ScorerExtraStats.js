import PropTypes from "prop-types";

const ScorerExtraStats = ({ shots, passes, goals, dribbles, games }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>Game Stats</h2>
      <div className='p-1'>
        <p className='lead text-center'>Goals</p>
        <div className='scorer-stats-cont'>
          <p>Goals scored: {goals.total}</p>
          <p>Assists: {goals.assists}</p>
        </div>
      </div>
      <div className='white-line'></div>
      <div className='p-1'>
        <p className='lead text-center'>Games</p>
        <div className='scorer-stats-cont'>
          <p>Appearances: {games.appearences}</p>
          <p>Minutes played: {games.minutes}</p>
          <p>Position: {games.position}</p>
          <p>Rating: {games.rating.slice(0, 4)}</p>
        </div>
      </div>
      <div className='white-line'></div>
      <div className='p-1'>
        <p className='lead text-center'>Shots</p>
        <div className='scorer-stats-cont'>
          <p>Taken: {shots.total}</p>
          <p>On target: {shots.on}</p>
          <p>Accuracy: {((shots.on / shots.total) * 100).toFixed(2)}%</p>
        </div>
      </div>
      <div className='white-line'></div>
      <div className='p-1'>
        <p className='lead text-center'>Passes</p>
        <div className='scorer-stats-cont'>
          <p>Total: {passes.total}</p>
          <p>Key: {passes.key}</p>
          <p>Accuracy: {passes.accuracy}%</p>
        </div>
      </div>
      <div className='white-line'></div>
      <div className='p-1'>
        <p className='lead text-center'>Dribbles</p>
        <div className='scorer-stats-cont'>
          <p>Attempts: {dribbles.attempts}</p>
          <p>Success: {dribbles.success}</p>
          <p>
            Rate: {((dribbles.success / dribbles.attempts) * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

ScorerExtraStats.propTypes = {
  shots: PropTypes.object.isRequired,
  games: PropTypes.object.isRequired,
  passes: PropTypes.object.isRequired,
  goals: PropTypes.object.isRequired,
  dribbles: PropTypes.object.isRequired,
  goals: PropTypes.object,
};

export default ScorerExtraStats;
