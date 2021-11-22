import PropTypes from "prop-types";

const TeamExtraStats = ({ biggest, lineups, clean_sheet }) => {
  return (
    <div className='grid-item text-white'>
      <h2 className='text-center'>Extra Info</h2>
      <div className='p-1'>
        <p className='lead text-center'>Biggest...</p>
        <div className='biggest-info'>
          <p>Win streak: {biggest.streak.wins}</p>
          <p>Loss streak: {biggest.streak.loses}</p>
          <p>Win (H): {biggest.wins.home}</p>
          <p>Win (A): {biggest.wins.away}</p>
          <p>Goals (H): {biggest.goals.for.home}</p>
          <p>Goals (A): {biggest.goals.for.away}</p>
        </div>
      </div>
      <div className='white-line'></div>
      <div className='p-1'>
        <p className='lead text-center'>Lineups</p>
        {lineups.map((lineup, index) => (
          <div key={index} className='lineup-item'>
            <p>Formation: {lineup.formation}</p>
            <p>Played: {lineup.played}</p>
          </div>
        ))}
      </div>
      <div className='white-line'></div>
      <div className='p-1'>
        <p className='lead text-center'>Clean Sheets</p>
        <div className='clean-sheet-info'>
          <p>Home: {clean_sheet.home}</p>
          <p>Away: {clean_sheet.away}</p>
          <p>Total: {clean_sheet.total}</p>
        </div>
      </div>
    </div>
  );
};

TeamExtraStats.propTypes = {
  biggest: PropTypes.object.isRequired,
  penalty: PropTypes.object.isRequired,
  lineups: PropTypes.array.isRequired,
};

export default TeamExtraStats;
