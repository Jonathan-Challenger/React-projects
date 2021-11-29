import PropTypes from "prop-types";
import england_flag from "../../img/england_flag.png";

const ScorerLeague = ({ league }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>League</h2>
      <div className='league-info p-2'>
        <p className='text-center lead'>{league.name}</p>
        <img className='my-1' src={league.logo} alt='Premier League' />
        <p className='my-1'>Country: {league.country}</p>
        <img
          className='england-flag my-1'
          src={england_flag}
          alt='League country flag'
        />
      </div>
    </div>
  );
};

ScorerLeague.propTypes = {
  league: PropTypes.object.isRequired,
};

export default ScorerLeague;
