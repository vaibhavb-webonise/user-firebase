import { ADD_USER, DELETE_USER } from './user-types';

const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

const deleteUser = (user) => ({
  type: DELETE_USER,
  payload: user,
});

export { addUser, deleteUser };
