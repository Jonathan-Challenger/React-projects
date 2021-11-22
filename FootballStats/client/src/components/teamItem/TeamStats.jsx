import PropTypes from "prop-types";
import TeamGoals from "./TeamGoals";
import TeamFix from "./TeamFix";
import TeamLeague from "./TeamLeague";
import TeamExtraStats from "./TeamExtraStats";

const TeamStats = ({
  teamStats: { goals, form, fixtures, biggest, clean_sheet, lineups, league },
}) => {
  return (
    <>
      <div className='stats-info my-1 text-white'>
        <TeamGoals goals={goals} />
        <TeamFix fixtures={fixtures} />
        <TeamLeague league={league} />
        <TeamExtraStats
          biggest={biggest}
          lineups={lineups}
          clean_sheet={clean_sheet}
        />
        <p className='text-white double'>{form}</p>
      </div>
    </>
  );
};

TeamStats.propTypes = {
  teamStats: PropTypes.object.isRequired,
};

export default TeamStats;
