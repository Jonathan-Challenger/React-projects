import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ScorerItem = ({ player, statistics }) => {
  return (
    <>
      <Link to={`/top-scorers/${player.id}`}>
        <div className='item-cont text-dark'>
          <img src={player.photo} alt='Player' />
          <p className='lead' style={{ marginBottom: "0" }}>
            {player.name}
          </p>
          <div className='line'></div>
          <div className='personal-info'>
            <p>Age: {player.age}</p>
            <p>From: {player.nationality}</p>
          </div>
          <div className='line'></div>
          <div className='team-info'>
            <p>Team: {statistics[0].team.name}</p>
            <img src={statistics[0].team.logo} alt='Team Logo' />
          </div>
          <div className='line'></div>
          <p className='lead' style={{ marginBottom: "0" }}>
            Goals: {statistics[0].goals.total}
          </p>
        </div>
      </Link>
    </>
  );
};

ScorerItem.propTypes = {
  player: PropTypes.object.isRequired,
  statistics: PropTypes.array.isRequired,
};

export default ScorerItem;
