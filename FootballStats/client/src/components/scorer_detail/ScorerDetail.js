import { useParams } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { useEffect } from "react";
import ScorerInfo from "./ScorerInfo";
import ScorerStats from "./ScorerStats";
import { connect } from "react-redux";
import { getScorer } from "../../actions/scorers";
import PropTypes from "prop-types";

const ScorerDetail = ({ getScorer, scorers: { loading, scorer } }) => {
  const { id } = useParams();
  const paramsId = Number(id);

  useEffect(() => {
    getScorer(paramsId);
  }, [getScorer, paramsId]);

  return (
    <div className='container-inner'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='basic-info'>
            <ScorerInfo scorerInfo={scorer} />
            <ScorerStats scorerStats={scorer} />
          </div>
        </>
      )}
    </div>
  );
};

ScorerDetail.propTypes = {
  getScorer: PropTypes.func.isRequired,
  scorers: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  scorers: state.scorers,
});

export default connect(mapStateToProps, { getScorer })(ScorerDetail);
