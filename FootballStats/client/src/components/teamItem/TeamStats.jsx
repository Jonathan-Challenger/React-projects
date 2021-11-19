import PropTypes from "prop-types";
import TeamGoals from "./TeamGoals";

const TeamStats = ({
  teamStats: { goals, form, fixtures, cards, biggest, clean_sheet, penalty },
}) => {
  return (
    <>
      <div className='stats-info my-1 text-white'>
        <TeamGoals goals={goals} />
        <p className='text-white'>fixtures: played won lost drawn</p>
        <p className='text-white'>League: name, country, logo, flag</p>
        <p className='text-white'>
          Clean Sheets: {clean_sheet.total}, cards, penalties
        </p>
        <p className='text-white double'>{form}</p>
      </div>
    </>
  );
};

TeamStats.propTypes = {
  teamStats: PropTypes.object.isRequired,
};

export default TeamStats;
