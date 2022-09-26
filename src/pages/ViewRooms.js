import styled from "styled-components";
import SideMenu from "../components/SideMenu";
import colors from "../styles/colors";


const Title = styled.h1`
    text-align: center;
    color: ${colors.red};
    width: 100px;
    display: block;
    margin: 0 auto;
`
const ButtonHide = styled.button`
     text-align: center;
    color: ${colors.red};
    width: 100px;
    display: block;
    margin: 0 auto;
`
 const handleHide = () => {
    // document.getElementById('sidemenu').classList.add('.hide')
    const menu = document.getElementById('sidemenu')
    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
      } else {
        menu.classList.add('hide');
      }
 }
function ViewRooms(props) {
    return(
        <>
        <SideMenu />
        <Title>Rooms</Title>
        <ButtonHide onClick={handleHide} green>Hide</ButtonHide>
        </>
    )
}

export default ViewRooms;