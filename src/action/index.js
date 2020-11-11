import * as actionTypes from "./types";
import axios from "axios";

export const searchPlanets = (searchText) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SEARCH_REQUEST });
    const res = await axios({
      url: `https://swapi.dev/api/planets/?search=${searchText}`,
      method: "GET",
    });
    dispatch({ type: actionTypes.SEARCH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: actionTypes.SEARCH_ERROR });
    console.log(err);
  }
};
