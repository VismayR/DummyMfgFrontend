export const SELECTED_VEHICLE = 'SELECTED_VEHICLE';
export const DELETED_VEHICLE = 'DELETED_VEHICLE';


export const setGetUserDetails = data => ({
  type: SELECTED_VEHICLE,
  payload: data,
});

export const setToDelete = data => ({
  type: DELETED_VEHICLE,
  payload: data,
});
