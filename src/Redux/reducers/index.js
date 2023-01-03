import {combineReducers} from 'redux';
import {editBtnReducer} from './EditBtn';
import {selectedVehicleReducer} from './SelectedVehicle';

const rootReducer = combineReducers({
  editBtnReducer,
  selectedVehicleReducer,
});

export default rootReducer;
