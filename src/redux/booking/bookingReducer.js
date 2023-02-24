import { BOOK, DELETE } from "./actionTypes";

function makeRandomId(range) {
  const characterCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const characterSmall = 'abcdefghijklmnopqrstuvwxyz';
  const characterNumberString = '0123456789';
  
  /* show id with capital letter, small letter and number (high secured) */
  const allCharacters = characterCapital + characterSmall + characterNumberString;
  
  /* show id only capital letter with number (less high secured) */
  // const allCharacters = characterCapital + characterNumberString;

  const charactersLength = allCharacters.length;
  let id = '';

  for (let i = 0; i < range; i++){
      id += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return id;
}

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return [
        ...state,
        {
          id: makeRandomId(16),
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