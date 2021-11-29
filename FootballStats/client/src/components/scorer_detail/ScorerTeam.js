import PropTypes from "prop-types";

const ScorerTeam = ({ team }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>Team</h2>
      <div className='league-info p-2'>
        <p className='text-center lead'>{team.name}</p>
        <img className='my-1' src={team.logo} alt='Premier League' />
      </div>
    </div>
  );
};

ScorerTeam.propTypes = {
  team: PropTypes.object.isRequired,
};

export default ScorerTeam;
