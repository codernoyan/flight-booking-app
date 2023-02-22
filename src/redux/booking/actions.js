import { BOOK, DELETE } from "./actionTypes"

export const book = (destinationFrom, destinationTo, journeyDate, guests, flightClass) => {
  return {
    type: BOOK,
    payload: {
      destinationFrom,
      destinationTo,
      journeyDate,
      guests,
      flightClass
    }
  }
};

export const deleteBooking = () => {
  return {
    type: DELETE,
  }
};