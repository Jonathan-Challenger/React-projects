import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StandingItem = ({ item }) => {
  return (
    <div className='text-white p-1 standing-item'>
      <Link className='text-white' to={`/teams/${item.team.id}`}>
        <div id='team-info'>
          <p style={{ marginRight: "0.2rem" }}>{item.rank} </p>
          <img src={item.team.logo} alt='Team' />
          <p style={{ marginLeft: "0.2rem" }}> {item.team.name}</p>
        </div>
      </Link>
      <p>{item.all.played}</p>
      <p>{item.all.win}</p>
      <p>{item.all.draw}</p>
      <p>{item.all.lose}</p>
      <p className='remove-mobile'>{item.all.goals.for}</p>
      <p className='remove-mobile'>{item.all.goals.against}</p>
      <p>{item.goalsDiff}</p>
      <p>{item.points}</p>
    </div>
  );
};

StandingItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default StandingItem;
