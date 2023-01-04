import {DELETED_VEHICLE, SELECTED_VEHICLE} from '../actions/SelectedVehicle';

const initialState = {
  data: [],
};

export const selectedVehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_VEHICLE:
      return {data:[...state.data,action.payload]};
    case DELETED_VEHICLE:
      return {data: action.payload};
    default:
      return state;
  }
};
