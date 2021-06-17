import { SET_USER, DELETE_USER } from './user-types';

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('set user running');
      return [...state, action.payload];
    case DELETE_USER: {
      const filteredArray = state.filter((user) => user.id !== action.payload);
      return filteredArray;
    }
    default:
      return state;
  }
};

export { userReducer };
