import { BOOK, DELETE } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return [
        ...state,
        {
          id: state.length + 1,
          destinationFrom: action.payload.destinationFrom,
          destinationTo: action.payload.destinationTo,
          guests: action.payload.guests,
          flightClass: action.payload.flightClass,
          actualJourneyDate: action.payload.actualJourneyDate,
        }
      ];
    case DELETE:
      const bookings = [...state];
      bookings.map((booking) => {
        if (booking.id === action.payload.id) {
          return bookings.filter(booking.id !== action.payload.id);
        }
      })
    default:
      return state;
  }
};

export default bookingReducer;