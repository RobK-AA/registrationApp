import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveUsers = users => {
  return {
  type: RECEIVE_USERS,
  users
}};

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const createUser = user => dispatch => {
  return UserAPIUtil.createUser(user).then(user => {
    dispatch(receiveUser(user))
  }, error => {
    dispatch(receiveErrors(error.responseJSON))
  })
};

export const fetchUsers = () => dispatch => {
    debugger
  return UserAPIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users), 
      error => {
        dispatch(receiveErrors(error.responseJSON))
      })
  )
};