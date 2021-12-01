import { GET_TEAMS, GET_TEAM_INFO, GET_TEAM_STATS } from "./types";
import axios from "axios";
import { key } from "../config/keys";

export const getTeams = () => async dispatch => {
  try {
    const res = await axios.get("https://v3.football.api-sports.io/teams", {
      headers: {
        "x-apisports-key": key,
      },
      params: {
        season: "2021",
        league: "39",
      },
    });

    const teams = await res.data.response;
    dispatch({
      type: GET_TEAMS,
      payload: teams,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTeamStats = id => async dispatch => {
  try {
    const res = await axios.get(
      "https://v3.football.api-sports.io/teams/statistics",
      {
        headers: {
          "x-apisports-key": key,
        },
        params: {
          team: id,
          league: "39",
          season: "2021",
        },
      }
    );

    const teamstats = await res.data.response;

    dispatch({
      type: GET_TEAM_STATS,
      payload: teamstats,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTeamInfo = id => async dispatch => {
  try {
    const res = await axios.get("https://v3.football.api-sports.io/teams", {
      headers: {
        "x-apisports-key": key,
      },
      params: {
        id: id,
      },
    });

    const teaminfo = await res.data.response;
    dispatch({
      type: GET_TEAM_INFO,
      payload: teaminfo,
    });
  } catch (error) {
    console.log(error.message);
  }
};
