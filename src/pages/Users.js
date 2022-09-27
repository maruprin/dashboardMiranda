import { useState } from "react";
import { headersUsers, tableHeadersUsers, usersData, usersItemHaveButton } from "../data/usersData";
import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";


function Users(props) {
    const [filteredUsersData, setFilteredUsersData] = useState(usersData)

    const handleFilter = (e) =>{
        if(e.target.textContent === 'All employee'){
            console.log('me toco all')
            setFilteredUsersData(usersData)
        } else if(e.target.textContent === 'Active employee'){
            console.log('me toco active')
            const filteredArray = usersData.filter((user,i)=>{
                return user.Status === 'Active';
            })
            setFilteredUsersData(filteredArray)
            console.log(filteredArray)
        } else if(e.target.textContent === 'Inactive employee'){
            console.log('me toco inactive')
            const filteredArray = usersData.filter((user,i)=>{
                return user.Status === 'Inactive';
            })
            setFilteredUsersData(filteredArray)
            console.log(filteredArray)
        }
        
    }
    return(
    <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {headersUsers.map((item,i)=>{
                    return(
                            <li onClick={e=>handleFilter(e)} key={i}>{item}</li>
                    )
                })}
            </ul>
            <div className="tableContainer">
                <table>
                    <tbody>
                        <tr>
                        {tableHeadersUsers.map((item,i)=>{
                            return(
                                    <th key={i}>{item}</th>
                            )
                        })}
                        </tr>
                        {filteredUsersData.map((item,i)=>{
                            return(
                                    <tr key={i}>
                                        {tableHeadersUsers.map((header,j)=>{
                                            if(usersItemHaveButton.includes(header)){
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

export default Users;