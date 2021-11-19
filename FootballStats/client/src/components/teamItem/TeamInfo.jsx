import PropTypes from "prop-types";

const TeamInfo = ({
  teamInfo: {
    team: { name, logo, founded, country },
  },
}) => {
  return (
    <>
      <div className='basic-info1 my-1'>
        <div className='text-info text-white'>
          <h2 className='x-large'>{name}</h2>
          <p>Founded: {founded}</p>
          <p>Country: {country}</p>
        </div>
        <img src={logo} alt='Club logo' />
      </div>
      <div className='white-line'></div>
    </>
  );
};

TeamInfo.propTypes = {
  teamInfo: PropTypes.object.isRequired,
};

export default TeamInfo;
