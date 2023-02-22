import { BOOK, DELETE } from "./actionTypes"

export const book = () => {
  return {
    type: BOOK,
  }
};

export const deleteBooking = () => {
  return {
    type: DELETE,
  }
};