import { headersUsers, tableHeadersUsers, usersData, usersItemHaveButton } from "../data/usersData";
import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";


function Users(props) {
    return(
    <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {headersUsers.map((item,i)=>{
                    return(
                            <li key={i}>{item}</li>
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
                        {usersData.map((item,i)=>{
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