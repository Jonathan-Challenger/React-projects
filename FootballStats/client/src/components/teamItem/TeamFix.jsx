import PropTypes from "prop-types";

const TeamFix = ({ fixtures }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>Fixtures</h2>
      <div className='fixtures-info'>
        <p>&#160;</p>
        <div className='stats-griditem-info'>
          <p className='mx-2'>H</p>
          <p className='mx-2'>A</p>
          <p className='mx-2'>Total</p>
        </div>
        <p>Wins</p>
        <div className='stats-griditem-info'>
          <p className='mx-2'>{fixtures.wins.home}</p>
          <p className='mx-2'>{fixtures.wins.away}</p>
          <p className='mx-2'>{fixtures.wins.total}</p>
        </div>
        <p>Draws</p>
        <div className='stats-griditem-info'>
          <p className='mx-2'>{fixtures.draws.home}</p>
          <p className='mx-2'>{fixtures.draws.away}</p>
          <p className='mx-2'>{fixtures.draws.total}</p>
        </div>
        <p>Losses</p>
        <div className='stats-griditem-info'>
          <p className='mx-2'>{fixtures.loses.home}</p>
          <p className='mx-2'>{fixtures.loses.away}</p>
          <p className='mx-2'>{fixtures.loses.total}</p>
        </div>
        <p>Played</p>
        <div className='stats-griditem-info'>
          <p className='mx-2'>{fixtures.played.home}</p>
          <p className='mx-2'>{fixtures.played.away}</p>
          <p className='mx-2'>{fixtures.played.total}</p>
        </div>
      </div>
    </div>
  );
};

TeamFix.propTypes = {
  fixtures: PropTypes.object.isRequired,
};

export default TeamFix;
