import PropTypes from "prop-types";

const TeamGoals = ({ goals }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>Goals</h2>
      <p>For: {goals.for.total.total}</p>
      <p>Against: {goals.against.total.total}</p>
      <div className='white-line'></div>
      <p>0-15: {goals.for.minute["0-15"].percentage}</p>
    </div>
  );
};

TeamGoals.propTypes = {
  goals: PropTypes.object.isRequired,
};

export default TeamGoals;
