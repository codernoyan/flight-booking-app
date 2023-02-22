import { BOOK, DELETE } from "./actionTypes"

export const bookFlight = (destinationFrom, destinationTo, actualJourneyDate, guests, flightClass) => {
  return {
    type: BOOK,
    payload: {
      destinationFrom: destinationFrom,
      destinationTo: destinationTo,
      actualJourneyDate: actualJourneyDate,
      guests: guests,
      flightClass: flightClass,
    }
  }
};

export const deleteBooking = () => {
  return {
    type: DELETE,
  }
};