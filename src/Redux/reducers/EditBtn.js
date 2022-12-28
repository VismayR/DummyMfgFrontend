import { set_edit_btn } from "../actions/EditBtn";


export const editBtnReducer = (state = true, action) => {
    switch (action.type) {
        case set_edit_btn:
            return state=action.payload;
        default:
            return state;
    }
}