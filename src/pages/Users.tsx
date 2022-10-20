import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { headersUsers, tableHeadersUsers, usersItemHaveButton } from "../data/usersData";
import { fetchUsers, selectUsers } from "../slices/usersSlice";
import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";


function Users(props) {
    const [filteredUsersData, setFilteredUsersData] = useState([])
    const usersList = useSelector(selectUsers);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch]);
    useEffect(()=>{
        setFilteredUsersData(usersList);
    },[usersList])

    const handleFilter = (e) =>{
        if(e.target.textContent === 'All employee'){
            setFilteredUsersData(usersList)
        } else if(e.target.textContent === 'Active employee'){
            const filteredArray = usersList.filter((user,i)=>{
                return user.Status === 'Active';
            })
            setFilteredUsersData(filteredArray)
        } else if(e.target.textContent === 'Inactive employee'){
            const filteredArray = usersList.filter((user,i)=>{
                return user.Status === 'Inactive';
            })
            setFilteredUsersData(filteredArray)
        }
        
    }
    return(
    <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {headersUsers.map((item,i)=>{
                    return(
                            <li onClick={e=>handleFilter(e)} key={item}>{item}</li>
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