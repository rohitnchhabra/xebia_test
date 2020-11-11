import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_ERROR,
  } from "../action/types";
  const initialState = {
    data: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
  };
  const planReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_REQUEST:
        return { ...initialState, isLoading: true };
      case SEARCH_SUCCESS:
        return {
          ...state,
          data: [ ...action.payload.results ],
          isSuccess: true,
          isLoading: false,
          isError: false,
        };
      case SEARCH_ERROR:
        return {
          ...state,
          isError: true,
          isLoading: false,
          isSuccess: false,
        };
      default:
        return state;
    }
  };
  
  export default planReducer;
  