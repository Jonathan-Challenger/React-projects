import PropTypes from "prop-types";

const VenueInfo = ({ teamInfo }) => {
  return (
    <>
      <div className='venue text-white'>
        <h2 className='text-center large'>Stadium</h2>
        <div className='basic-info2 my-1'>
          <div className='text-info'>
            <h2 className='lead'>{teamInfo[0].venue.name}</h2>
            <p>
              Address: {teamInfo[0].venue.address}, {teamInfo[0].venue.city}
            </p>
            <p>Capacity: {teamInfo[0].venue.capacity}</p>
          </div>
          <img src={teamInfo[0].venue.image} alt='Club stadium' />
        </div>
      </div>
    </>
  );
};

VenueInfo.propTypes = {
  teamInfo: PropTypes.object.isRequired,
};

export default VenueInfo;
