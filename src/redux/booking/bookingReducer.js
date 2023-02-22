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
      return bookings.filter((booking) => booking.id !== action.payload.id)
    default:
      return state;
  }
};

export default bookingReducer;