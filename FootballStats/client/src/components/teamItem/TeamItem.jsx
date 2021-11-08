import PropTypes from "prop-types";
import "./teamItem.css";

const TeamItem = ({ team }) => {
  return (
    <>
      <div className='team-cont'>
        <img src={team.logo} alt='Team Logo' />
        <p>{team.name}</p>
      </div>
    </>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object,
};

export default TeamItem;
