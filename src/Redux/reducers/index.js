import {combineReducers} from 'redux';
import {editBtnReducer} from './EditBtn';
import {selectedVehicleReducer} from './SelectedVehicle';
import { userDetailsReducer } from './UserDetails';

const rootReducer = combineReducers({
  editBtnReducer,
  selectedVehicleReducer,
  userDetailsReducer
});

export default rootReducer;
