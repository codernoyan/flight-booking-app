import bookingReducer from "../booking/bookingReducer";

// middleware
export const limitBooking = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);
  
  // upcoming state
  const upcomingState = [action].reduce(bookingReducer, store.getState());
  console.log(`upcomingState: ${JSON.stringify(upcomingState)}`);

  // pass action
  return next(action)
}