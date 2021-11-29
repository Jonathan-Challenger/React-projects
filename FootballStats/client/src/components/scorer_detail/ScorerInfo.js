import PropTypes from "prop-types";

const ScorerInfo = ({
  scorerInfo: {
    player: { name, nationality, photo, weight, age, height },
  },
}) => {
  return (
    <>
      <div className='basic-info1 my-1 text-white'>
        <div className='text-info'>
          <h2 className='x-large'>{name}</h2>
          <p>Age: {age}</p>
          <p>Nationality: {nationality}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
        </div>
        <img src={photo} alt='Player' />
      </div>
      <div className='white-line'></div>
    </>
  );
};

ScorerInfo.propTypes = {
  scorerInfo: PropTypes.object.isRequired,
};

export default ScorerInfo;
