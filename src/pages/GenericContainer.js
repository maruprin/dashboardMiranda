import { ButtonViewNote, GenericContainerStyled } from "../styles/styledComponents";

function GenericContainer(props){
    const handleHola = () => console.log('holuuuu')
    return(
        <GenericContainerStyled className={props.openSideMenu}>
            <ul>
                {props.menuHeader.map((item,i)=>{
                    return(
                            <li onClick={handleHola} key={i}>{item}</li>
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
                                        {props.tableHeader.map((header,j)=>{
                                            if(props.haveButton.includes(header)){
                                                return(
                                                    <>
                                                        <td key={j}>
                                                            <ButtonViewNote>View Note</ButtonViewNote>
                                                        </td>
                                                    </>
                                                )
                                            } else if(header === 'Status') {
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