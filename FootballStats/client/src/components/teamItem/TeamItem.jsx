import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TeamItem = ({ team: { id, name, logo } }) => {
  return (
    <>
      <Link to={`/teams/${id}`}>
        <div className='item-cont'>
          <img src={logo} alt='Team Logo' />
          <p className='lead text-center text-dark'>{name}</p>
        </div>
      </Link>
    </>
  );
};

TeamItem.propTypes = {
  team: PropTypes.object,
};

export default TeamItem;
