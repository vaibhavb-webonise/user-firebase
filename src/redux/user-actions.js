import { ADD_USER, DELETE_USER } from './user-types';

const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export { addUser, deleteUser };
