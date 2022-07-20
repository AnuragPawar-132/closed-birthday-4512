import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILIURE } from "./actionTypes"

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState ,  { type, payload }) => {
    // console.log(payload , type)
  switch (type) {
    case FETCH_DATA_REQUEST: {
      return{
        ...state,
          isLoading: true,
      }
    }
    case FETCH_DATA_SUCCESS: {
      return{
        ...state,
          isLoading: false,
          products: payload,
      }
    }
    case FETCH_DATA_FAILIURE: {
      return {
        ...state,
          isLoading: false,
          isError: true,
      }
    }
    default:
      return state;
  }
};