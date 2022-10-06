import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingItemHaveButton, headersBookings, tableHeadersBookings } from "../data/bookingsData";
import { fetchBookings, selectBookings } from "../slices/bookingsSlice";
import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";

function Bookings(props) {
    const bookingsList = useSelector(selectBookings)
    const [filteredBookingsData, setFilteredBookingsData] = useState([])
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch, filteredBookingsData]);

  useEffect(() => {
    setFilteredBookingsData(bookingsList);
  }, [bookingsList]);

    const handleFilter = (e) =>{
        if(e.target.textContent === 'All bookings'){
            setFilteredBookingsData(bookingsList)
        } else if(e.target.textContent === 'Checking in'){
            const filteredArray = bookingsList.filter((booking,i)=>{
                return booking.Status === 'Check In';
            })
            setFilteredBookingsData(filteredArray)
        } else if(e.target.textContent === 'Checking out'){
            const filteredArray = bookingsList.filter((booking,i)=>{
                return booking.Status === 'Check Out';
            })
            setFilteredBookingsData(filteredArray)
        } else if(e.target.textContent === 'In progress'){
            const filteredArray = bookingsList.filter((booking,i)=>{
                return booking.Status === 'In Progress';
            })
            setFilteredBookingsData(filteredArray)
        }
    }
        
    return(
        <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {headersBookings.map((item,i)=>{
                    return(
                            <li onClick={e=>handleFilter(e)} key={i}>{item}</li>
                    )
                })}
            </ul>
            <div className="tableContainer">
                <table>
                    <tbody>
                        <tr>
                        {tableHeadersBookings.map((item,i)=>{
                            return(
                                    <th key={i}>{item}</th>
                            )
                        })}
                        </tr>
                        {filteredBookingsData.map((item,i)=>{
                            return(
                                    <tr key={i}>
                                        {tableHeadersBookings.map((header,j)=>{
                                            if(bookingItemHaveButton.includes(header)){
                                                return(
                                                    <>
                                                        <td key={j}>
                                                            <ButtonViewNote>View Note</ButtonViewNote>
                                                        </td>
                                                    </>
                                                )
                                            } else if(header === 'Status' || header === 'Archive') {
                                                return(
                                                    <>
                                                        <td key={j}>
                                                            <button className={item[header].replace(/ /g, "")}>{item[header]}</button>
                                                        </td>
                                                    </>
                                                )
                                            } else {
                                                return(
                                                <td key={j}>
                                                    {item[header]}
                                                </td>
                                            )
                                            }
                                            
                                        })}
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </GenericContainerStyled>
    )
}

export default Bookings;