import { useState } from "react";
import { bookingItemHaveButton, bookingsData, headersBookings, tableHeadersBookings } from "../data/bookingsData";
import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";

function Bookings(props) {
    const [filteredBookingsData, setFilteredBookingsData] = useState(bookingsData)

    const handleFilter = (e) =>{
        console.log(e.target.textContent)
        console.log(bookingsData)

        if(e.target.textContent === 'All bookings'){
            console.log(bookingsData)
            console.log('me toco all')
            setFilteredBookingsData(bookingsData)
        } else if(e.target.textContent === 'Checking in'){
            console.log('me toco active')
            const filteredArray = bookingsData.filter((booking,i)=>{
                return booking.Status === 'Check In';
            })
            setFilteredBookingsData(filteredArray)
            console.log(filteredArray)
        } else if(e.target.textContent === 'Checking out'){
            console.log('me toco inactive')
            const filteredArray = bookingsData.filter((booking,i)=>{
                return booking.Status === 'Check Out';
            })
            setFilteredBookingsData(filteredArray)
            console.log(filteredArray)
        } else if(e.target.textContent === 'In progress'){
            console.log('me toco in progress')
            const filteredArray = bookingsData.filter((booking,i)=>{
                return booking.Status === 'In Progress';
            })
            setFilteredBookingsData(filteredArray)
            console.log(filteredArray)
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