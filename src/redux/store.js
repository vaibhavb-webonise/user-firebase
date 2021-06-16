import { createStore } from 'redux';
import { addUser } from './user-actions';
import { userReducer } from './user-reducer';

const store = createStore(userReducer);

export { store };
