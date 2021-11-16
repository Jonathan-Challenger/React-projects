import PropTypes from "prop-types";

const StandingItem = ({ item }) => {
  return <div>{item.team.name}</div>;
};

StandingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default StandingItem;
