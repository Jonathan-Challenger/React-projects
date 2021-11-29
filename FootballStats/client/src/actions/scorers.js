import { GET_SCORERS, GET_SCORER } from "./types";
import axios from "axios";

export const getScorers = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://v3.football.api-sports.io/players/topscorers",
      {
        headers: {
          "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
        },
        params: {
          season: "2021",
          league: "39",
        },
      }
    );

    const scorers = await res.data.response;

    dispatch({
      type: GET_SCORERS,
      payload: scorers,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getScorer = id => async dispatch => {
  try {
    const res = await axios.get(
      "https://v3.football.api-sports.io/players/topscorers",
      {
        headers: {
          "x-apisports-key": "4b7394b710f3b701ba1b6b057b9495fd",
        },
        params: {
          season: "2021",
          league: "39",
        },
      }
    );

    const scorers = await res.data.response;

    const scorer = await scorers.filter(item => item.player.id === id);
    const playerInfo = await scorer.shift();

    dispatch({
      type: GET_SCORER,
      payload: playerInfo,
    });
  } catch (error) {
    console.log(error.message);
  }
};
