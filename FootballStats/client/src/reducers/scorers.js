import { GET_SCORERS, GET_SCORER } from "../actions/types";

const initialState = {
  topScorers: [],
  scorer: null,
  loading: true,
};

export default function scorers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SCORERS:
      return {
        ...state,
        topScorers: payload.map(item => item),
        loading: false,
      };
    case GET_SCORER:
      return {
        ...state,
        scorer: payload,
        loading: false,
      };
    default:
      return state;
  }
}
