import { useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ScorerItem from "./ScorerItem";
import { connect } from "react-redux";
import { getScorers } from "../../actions/scorers";
import PropTypes from "prop-types";

const ScorersCont = ({ getScorers, scorers: { topScorers, loading } }) => {
  useEffect(() => {
    getScorers();
  }, [getScorers]);

  return (
    <div className='container-inner'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2 className='text-center large text-accent'>Top Scorers</h2>
          <div className='items-cont'>
            {topScorers.map(({ player, statistics }) => (
              <ScorerItem
                player={player}
                statistics={statistics}
                key={player.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ScorersCont.propTypes = {
  getScorers: PropTypes.func.isRequired,
  scorers: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  scorers: state.scorers,
});

export default connect(mapStateToProps, { getScorers })(ScorersCont);
