import PropTypes from "prop-types";

const TeamGoals = ({ goals }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>Goals</h2>
      <div className='goals-for-against p-1'>
        <p>&#160;</p>
        <div className='goals-for-against-info'>
          <p className='mx-2'>H</p>
          <p className='mx-2'>A</p>
          <p className='mx-2'>Total</p>
        </div>
        <p>For</p>
        <div className='goals-for-against-info'>
          <p className='mx-2'>{goals.for.total.home}</p>
          <p className='mx-2'>{goals.for.total.away}</p>
          <p className='mx-2'>{goals.for.total.total}</p>
        </div>
        <p>Against</p>
        <div className='goals-for-against-info'>
          <p className='mx-2'>{goals.against.total.home}</p>
          <p className='mx-2'>{goals.against.total.away}</p>
          <p className='mx-2'>{goals.against.total.total}</p>
        </div>
      </div>
      <div className='white-line'></div>
      <div className='goals-minute p-1'>
        <p>Minute</p>
        <p>GF</p>
        <p>GA</p>
        <p>0 - 15</p>
        <p>
          {goals.for.minute["0-15"].percentage
            ? goals.for.minute["0-15"].percentage
            : "0.00%"}
        </p>
        <p>
          {goals.against.minute["0-15"].percentage
            ? goals.against.minute["0-15"].percentage
            : "0.00%"}
        </p>
        <p>16 - 30</p>
        <p>
          {goals.for.minute["16-30"].percentage
            ? goals.for.minute["16-30"].percentage
            : "0.00%"}
        </p>
        <p>
          {goals.against.minute["16-30"].percentage
            ? goals.against.minute["16-30"].percentage
            : "0.00%"}
        </p>
        <p>31 - 45</p>
        <p>
          {goals.for.minute["31-45"].percentage
            ? goals.for.minute["31-45"].percentage
            : "0.00%"}
        </p>
        <p>
          {goals.against.minute["31-45"].percentage
            ? goals.against.minute["31-45"].percentage
            : "0.00%"}
        </p>
        <p>46 - 60</p>
        <p>
          {goals.for.minute["46-60"].percentage
            ? goals.for.minute["46-60"].percentage
            : "0.00%"}
        </p>
        <p>
          {goals.against.minute["46-60"].percentage
            ? goals.against.minute["46-60"].percentage
            : "0.00%"}
        </p>
        <p>61 - 75</p>
        <p>
          {goals.for.minute["61-75"].percentage
            ? goals.for.minute["61-75"].percentage
            : "0.00%"}
        </p>
        <p>
          {goals.against.minute["61-75"].percentage
            ? goals.against.minute["61-75"].percentage
            : "0.00%"}
        </p>
        <p>76 - 90</p>
        <p>
          {goals.for.minute["76-90"].percentage
            ? goals.for.minute["76-90"].percentage
            : "0.00%"}
        </p>
        <p>
          {goals.against.minute["76-90"].percentage
            ? goals.against.minute["76-90"].percentage
            : "0.00%"}
        </p>
      </div>
    </div>
  );
};

TeamGoals.propTypes = {
  goals: PropTypes.object.isRequired,
};

export default TeamGoals;
