import PropTypes from "prop-types";

const StandingItem = ({ item }) => {
  return (
    <div className='text-accent p-1 standing-item'>
      <div id='team-info'>
        <p style={{ marginRight: "0.2rem" }}>{item.rank} </p>
        <img src={item.team.logo} alt='Team' />
        <p style={{ marginLeft: "0.2rem" }}> {item.team.name}</p>
      </div>
      <p>{item.all.played}</p>
      <p>{item.all.win}</p>
      <p>{item.all.draw}</p>
      <p>{item.all.lose}</p>
      <p>{item.all.goals.for}</p>
      <p>{item.all.goals.against}</p>
      <p>{item.goalsDiff}</p>
      <p>{item.points}</p>
    </div>
  );
};

StandingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default StandingItem;
