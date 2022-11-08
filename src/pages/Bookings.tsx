import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingItemHaveButton,
  headersBookings,
  tableHeadersBookings,
} from "../data/bookingsData";
import { fetchBookings, selectBookings } from "../slices/bookingsSlice";
import {
  ButtonViewNote,
  GenericContainerStyled,
} from "../styles/styledComponents";
import { store } from "../app/store";

interface IPropsBooking {
  openSideMenu: boolean;
}

interface IBookingsList {
  "Booking Id": number;
  "Check-out": string;
  "Ckeck-in": string;
  Guest: string;
  "Order date": string;
  "Room type": string;
  "Special Request": string;
  Status: string;
  room_number: number;
}

type AppDispatch = typeof store.dispatch;
type FormElement = React.FormEvent<HTMLFormElement>;
function Bookings(props: IPropsBooking): JSX.Element {
  const bookingsList: IBookingsList[] = useSelector(selectBookings);
  const [filteredBookingsData, setFilteredBookingsData] = useState<
    void | IBookingsList[]
  >([]);
  const dispatch: (a: any) => AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch, filteredBookingsData]);

  useEffect(() => {
    setFilteredBookingsData(bookingsList);
  }, [bookingsList]);

  const handleFilter: IBookingsList[] = (e: FormElement) => {
    if (e.target.textContent === "All bookings") {
      setFilteredBookingsData(bookingsList);
    } else if (e.target.textContent === "Checking in") {
      const filteredArray = bookingsList.filter((booking, i) => {
        return booking.Status === "Check In";
      });
      setFilteredBookingsData(filteredArray);
    } else if (e.target.textContent === "Checking out") {
      const filteredArray = bookingsList.filter((booking, i) => {
        return booking.Status === "Check Out";
      });
      setFilteredBookingsData(filteredArray);
    } else if (e.target.textContent === "In progress") {
      const filteredArray = bookingsList.filter((booking, i) => {
        return booking.Status === "In Progress";
      });
      setFilteredBookingsData(filteredArray);
    }
  };
  return (
    <GenericContainerStyled className={props.openSideMenu ? "show" : "hide"}>
      <ul className={props.openSideMenu ? "show" : "hide"}>
        
        {headersBookings.map((item: string, i:number) => {
          return (
            <li onClick={(e) => handleFilter(e)} key={i}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="tableContainer">
        <table>
          <tbody>
            <tr>
              {tableHeadersBookings.map((item:string, i:number) => {
                return <th key={i}>{item}</th>;
              })}
            </tr>
            {filteredBookingsData.map((item:IBookingsList[], i:number) => {
              return (
                <tr key={i}>
                  {tableHeadersBookings.map((header:string, j:number) => {
                    if (bookingItemHaveButton.includes(header)) {
                      return (
                        <>
                          <td key={j}>
                            <ButtonViewNote>View Note</ButtonViewNote>
                          </td>
                        </>
                      );
                    } else if (header === "Status" || header === "Archive") {
                      return (
                        <>
                          <td key={j}>
                            <button className={item[header].replace(/ /g, "")}>
                              {item[header]}
                            </button>
                          </td>
                        </>
                      );
                    } else {
                      return <td key={j}>{item[header]}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </GenericContainerStyled>
  );
}

export default Bookings;
