import { useEffect } from "react";
import TeamItem from "../teamItem/TeamItem";
import Spinner from "../spinner/Spinner";
import { connect } from "react-redux";
import { getTeams } from "../../actions/teams";
import PropTypes from "prop-types";

const TeamCont = ({ getTeams, teams: { teams, loading } }) => {
  useEffect(() => {
    getTeams();
  }, [getTeams]);

  return (
    <div className='container-inner'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2 className='text-center large text-accent'>Teams</h2>
          <div className='items-cont'>
            {teams.map(({ team }) => (
              <TeamItem team={team} key={team.id} />
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
};

TeamCont.propTypes = {
  getTeams: PropTypes.func.isRequired,
  teams: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  teams: state.teams,
});

export default connect(mapStateToProps, { getTeams })(TeamCont);
