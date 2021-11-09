import PropTypes from "prop-types";
import "./teamItem.css";

const TeamItem = ({ team }) => {
  return (
    <>
      <div className='team-cont'>
        <img src={team.logo} alt='Team Logo' />
        <p className='lead text-center text-dark'>{team.name}</p>
      </div>
    </>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object,
};

export default TeamItem;
