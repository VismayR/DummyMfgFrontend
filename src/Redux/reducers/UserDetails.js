import {get_user_details} from '../actions/UserDetails';

const initialState = {
    data : null
}

export const userDetailsReducer = (state=initialState, action) => {
  switch (action.type) {
    case get_user_details:
        return console.log(action.payload)
    //   return { ...state, data: action.payload};
    default:
      return state;
  }
};
