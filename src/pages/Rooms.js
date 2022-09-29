import { useState } from "react";
import { headersRooms, roomsData, roomsItemHaveButton, tableHeadersRooms } from "../data/roomsData";
import { ButtonViewNote, FilterInput, GenericContainerStyled } from "../styles/styledComponents";

function Rooms(props) {
    const [filteredRoomsData, setFilteredRoomsData] = useState(roomsData)

    const handleFilter = (e) =>{
        console.log('hola')
        if(e.target.textContent === 'All rooms'){
            console.log(roomsData)
            console.log('me toco all')
            setFilteredRoomsData(roomsData)
        } else if(e.target.textContent === 'Available'){
            console.log('me toco active')
            const filteredArray = roomsData.filter((room,i)=>{
                return room.Status === 'Available';
            })
            setFilteredRoomsData(filteredArray)
            console.log(filteredArray)
        } else if(e.target.textContent === 'Booked'){
            console.log('me toco inactive')
            const filteredArray = roomsData.filter((room,i)=>{
                return room.Status === 'Booked';
            })
            setFilteredRoomsData(filteredArray)
            console.log(filteredArray)
        }
        
    }

    const handleTyping = (e) =>{
        console.log(e.target.value)
    }
    return(
        <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {headersRooms.map((item,i)=>{
                    return(
                            <li onClick={e=>handleFilter(e)} key={i}>{item}</li>
                    )
                })} 
            </ul> 
            <FilterInput onChange={handleTyping} type="text" name="search" placeholder="search" />
            <div className="tableContainer">
                <table>
                    <tbody>
                        <tr>
                        {tableHeadersRooms.map((item,i)=>{
                            return(
                                    <th key={i}>{item}</th>
                            )
                        })}
                        </tr>
                        {filteredRoomsData.map((item,i)=>{
                            return(
                                    <tr key={i}>
                                        {tableHeadersRooms.map((header,j)=>{
                                            if(roomsItemHaveButton.includes(header)){
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

export default Rooms;