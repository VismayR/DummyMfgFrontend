import { GET_DATA } from "../actions/UserDetails";

const initialState = {
  data: [],
};

export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {data:[...state.data,action.payload]};
    default:
      return state;
  }
};