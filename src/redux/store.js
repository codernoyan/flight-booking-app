import { createStore, applyMiddleware } from 'redux';
import bookingReducer from './booking/bookingReducer';
import { BOOK } from './booking/actionTypes';


const limitBookButton = (store) => (next) => (action) => {
  if (action.type === BOOK) {
    if (store.getState().length === 3) {
      window.alert('You cannot book more');
      return;
    }
  };
  return next(action);
};


const store = createStore(bookingReducer, applyMiddleware(limitBookButton));

export default store;