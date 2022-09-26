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
function ViewUsers(props) {
    return(
        <>
        <SideMenu />
        <Title>Users</Title>
        </>
    )
}

export default ViewUsers;