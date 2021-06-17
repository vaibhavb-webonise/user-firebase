import { SET_USER, DELETE_USER } from './user-types';

const setUser = (users) => ({
  type: SET_USER,
  payload: users,
});

const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export { setUser, deleteUser };
