import PropTypes from "prop-types";

const TeamFix = ({ fixtures }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>Fixtures</h2>
      <div className='fixtures-info'>
        <p>&#160;</p>
        <div className='stats-griditem-info'>
          <p>H</p>
          <p>A</p>
          <p>Total</p>
        </div>
        <p>Wins</p>
        <div className='stats-griditem-info'>
          <p>{fixtures.wins.home}</p>
          <p>{fixtures.wins.away}</p>
          <p>{fixtures.wins.total}</p>
        </div>
        <p>Draws</p>
        <div className='stats-griditem-info'>
          <p>{fixtures.draws.home}</p>
          <p>{fixtures.draws.away}</p>
          <p>{fixtures.draws.total}</p>
        </div>
        <p>Losses</p>
        <div className='stats-griditem-info'>
          <p>{fixtures.loses.home}</p>
          <p>{fixtures.loses.away}</p>
          <p>{fixtures.loses.total}</p>
        </div>
        <p>Played</p>
        <div className='stats-griditem-info'>
          <p>{fixtures.played.home}</p>
          <p>{fixtures.played.away}</p>
          <p>{fixtures.played.total}</p>
        </div>
      </div>
    </div>
  );
};

TeamFix.propTypes = {
  fixtures: PropTypes.object.isRequired,
};

export default TeamFix;
