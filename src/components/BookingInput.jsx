import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../redux/booking/actions";
import BookingPreview from "./BookingPreview";

export default function BookingInput() {
  const bookingData = useSelector((state) => state);
  const dispatch = useDispatch();

  // booking form
  const handleBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const destinationFrom = form.from.value;
    const destinationTo = form.to.value;
    const journeyDate = new Date(form.date.value);
    const guests = form.guests.value;
    const flightClass = form.ticketClass.value;

    // date modification
    const day = journeyDate.getDate() < 10 ? '0' + journeyDate.getDate() : journeyDate.getDate();
    const month = (journeyDate.getMonth() + 1) < 10 ? '0' + (journeyDate.getMonth() + 1) : journeyDate.getMonth() + 1;
    const actualJourneyDate = `${day}-${month}-${journeyDate.getFullYear()}`;

    // dispatch action
    dispatch(bookFlight(destinationFrom, destinationTo, actualJourneyDate, guests, flightClass));
    // console.log(destinationFrom, destinationTo, actualJourneyDate, guests, flightClass);

  }
  console.log(bookingData);
  return (
    <section>
      {/* Input Data */}
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form onSubmit={handleBook} className="first-hero lws-inputform">
            {/* From */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* To */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="des-from">
              <p>Journey Date</p>
              <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
            </div>

            {/* Guests */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                  <option value="" hidden>Please Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>
            {/* Class */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                  <option value="" hidden>Please Select</option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button className="addCity" type="submit" id="lws-addCity" disabled={bookingData.length === 3 && true}>
              <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
      {/* Preview Data */}
      {/* data table */}
      {
        bookingData.length !== 0 && (
          <div className="table-container">
            <table className="booking-table">
              <thead className="bg-gray-100/50">
                <tr className="text-black text-left">
                  <th>Destination From</th>
                  <th>Destination To</th>
                  <th className="text-center">Journey Date</th>
                  <th className="text-center">Guests</th>
                  <th className="text-center">Class</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                {/* Rows */}
                {
                  bookingData?.map((booking) => <BookingPreview key={booking.id} booking={booking} />)
                }
              </tbody>
            </table>
          </div>
        )
      }
    </section>
  )
}


// function curriedFunction(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     }
//   }
// }
// curriedFunction(1)(2)(5);
