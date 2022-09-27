import { contactData, contactItemHaveButton, headersContact, tableHeadersContact } from "../data/contactData";
import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";

function Contact(props) {
    return(
    <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {headersContact.map((item,i)=>{
                    return(
                            <li key={i}>{item}</li>
                    )
                })}
            </ul>
            <div className="tableContainer">
                <table>
                    <tbody>
                        <tr>
                        {tableHeadersContact.map((item,i)=>{
                            return(
                                    <th key={i}>{item}</th>
                            )
                        })}
                        </tr>
                        {contactData.map((item,i)=>{
                            return(
                                    <tr key={i}>
                                        {tableHeadersContact.map((header,j)=>{
                                            if(contactItemHaveButton.includes(header)){
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

export default Contact;