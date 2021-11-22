import PropTypes from "prop-types";

const VenueInfo = ({
  teamInfo: {
    venue: { name, city, capacity, address, image },
  },
}) => {
  return (
    <>
      <div className='venue text-white'>
        <h2 className='text-center large'>Stadium</h2>
        <div className='basic-info2 my-1'>
          <div className='text-info'>
            <h2 className='lead'>{name}</h2>
            <p>
              Address: {address}, {city}
            </p>
            <p>Capacity: {capacity}</p>
          </div>
          <img src={image} alt='Club stadium' />
        </div>
      </div>
    </>
  );
};

VenueInfo.propTypes = {
  teamInfo: PropTypes.object.isRequired,
};

export default VenueInfo;
