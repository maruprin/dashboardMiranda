import { headersRooms, roomsData, roomsItemHaveButton, tableHeadersRooms } from "../data/roomsData";
import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";

function Rooms(props) {
    return(
        <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {headersRooms.map((item,i)=>{
                    return(
                            <li key={i}>{item}</li>
                    )
                })}
            </ul>
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
                        {roomsData.map((item,i)=>{
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