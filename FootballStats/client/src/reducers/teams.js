import { GET_TEAMS, GET_TEAM_INFO, GET_TEAM_STATS } from "../actions/types";

const initialState = {
  teams: [],
  teamInfo: null,
  teamStats: null,
  loading: true,
};

export default function teams(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: payload.map(item => item),
        loading: false,
      };
    case GET_TEAM_STATS:
      return {
        ...state,
        teamStats: payload,
        loading: false,
      };
    case GET_TEAM_INFO:
      return {
        ...state,
        teamInfo: payload,
      };
    default:
      return state;
  }
}
