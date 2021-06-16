import { ADD_USER, DELETE_USER } from './user-types';

const initialState = [
  {
    name: 'vaibhav',
    village: 'baramati',
    contact: 'bagaderonit@gmail.com',
  },
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
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
