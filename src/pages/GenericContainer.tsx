import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";

interface PropsGeneric {
    openSideMenu: boolean;
    menuHeader: string[];
    tableHeader: string[];
    tableData: string[];
    haveButton:string;
  }

function GenericContainer(props:PropsGeneric){
    return(
        <GenericContainerStyled className={props.openSideMenu ? 'show' : 'hide'}>
            <ul className={props.openSideMenu ? 'show' : 'hide'}>
                {props.menuHeader.map((item,i)=>{
                    return(
                            <li key={i}>{item}</li>
                    )
                })}
            </ul>
            <div className="tableContainer">
                <table>
                    <tbody>
                        <tr>
                        {props.tableHeader.map((item,i)=>{
                            return(
                                    <th key={i}>{item}</th>
                            )
                        })}
                        </tr>
                        {props.tableData.map((item,i)=>{
                            return(
                                    <tr key={i}>
                                        {props.tableHeader.map((header:string,j:number)=>{
                                            if(props.haveButton.includes(header)){
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

export default GenericContainer;