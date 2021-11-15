import PropTypes from "prop-types";

const TeamItem = ({ team: { name, logo } }) => {
  return (
    <>
      <div className='item-cont'>
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
