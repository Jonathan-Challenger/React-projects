import Spinner from "../spinner/Spinner";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamInfo from "./TeamInfo";
import VenueInfo from "./VenueInfo";
import TeamStats from "./TeamStats";
import { connect } from "react-redux";
import { getTeamInfo, getTeamStats } from "../../actions/teams";
import PropTypes from "prop-types";

const TeamDetail = ({
  getTeamInfo,
  getTeamStats,
  teams: { loading, teamInfo, teamStats },
}) => {
  const { id } = useParams();
  const paramsId = Number(id);

  useEffect(() => {
    getTeamInfo(paramsId);
    getTeamStats(paramsId);
  }, [getTeamInfo, getTeamStats, paramsId]);

  return (
    <div className='container-inner'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='basic-info'>
            <TeamInfo teamInfo={teamInfo} />
            <VenueInfo teamInfo={teamInfo} />
          </div>
          <TeamStats teamStats={teamStats} />
        </>
      )}
    </div>
  );
};

TeamDetail.propTypes = {
  getTeamInfo: PropTypes.func.isRequired,
  getTeamStats: PropTypes.func.isRequired,
  teams: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  teams: state.teams,
});

export default connect(mapStateToProps, { getTeamInfo, getTeamStats })(
  TeamDetail
);
