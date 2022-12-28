export const get_user_details = 'GET_USER_DETAILS';

export const setGetUserDetails = (data) => ({
  type: get_user_details,
  payload: data,
});
