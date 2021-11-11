import PropTypes from "prop-types";
import "./teamItem.css";

const TeamItem = ({ team: { name, logo } }) => {
  return (
    <>
      <div className='team-cont'>
        <img src={logo} alt='Team Logo' />
        <p className='lead text-center text-dark'>{name}</p>
      </div>
    </>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object,
};

export default TeamItem;
