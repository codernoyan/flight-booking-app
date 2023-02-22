import { BOOK, DELETE } from "./actionTypes"

export const bookFlight = (destinationFrom, destinationTo, journeyDate, guests, flightClass) => {
  return {
    type: BOOK,
    payload: {
      destinationFrom,
      destinationTo,
      guests,
      flightClass,
      journeyDate,
    }
  }
};

export const deleteBooking = () => {
  return {
    type: DELETE,
  }
};