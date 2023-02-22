import { createStore, applyMiddleware } from 'redux';
import bookingReducer from './booking/bookingReducer';
import { limitBooking } from './middlewares/limitBooking';

const store = createStore(bookingReducer, applyMiddleware(limitBooking));

export default store;