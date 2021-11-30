import PropTypes from "prop-types";

const TeamInfo = ({ teamInfo }) => {
  return (
    <>
      <div className='basic-info1 my-1'>
        <div className='text-info text-white'>
          <h2 className='x-large'>{teamInfo[0].team.name}</h2>
          <p>Founded: {teamInfo[0].team.founded}</p>
          <p>Country: {teamInfo[0].team.country}</p>
        </div>
        <img src={teamInfo[0].team.logo} alt='Club logo' />
      </div>
      <div className='white-line'></div>
    </>
  );
};

TeamInfo.propTypes = {
  teamInfo: PropTypes.array.isRequired,
};

export default TeamInfo;
