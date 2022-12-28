import { combineReducers } from "redux";
import { editBtnReducer  } from "./EditBtn";
import { userDetailsReducer } from "./UserDetails";

const rootReducer = combineReducers({
    editBtnReducer,
    userDetailsReducer,
});

export default rootReducer;