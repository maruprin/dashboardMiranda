import { useEffect, useReducer } from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext, MyContext } from "../App";
import colors from "../styles/colors";
import icons from "../styles/icons";
import { Button, Logo } from "../styles/styledComponents";

const SideMenuContainer = styled.div`
  width: 345px;
  background-color: #ffffff;
  padding-top: 32px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  &.hide{
    left: -345px;
  }
  &.show{
    left: 0px;
  }
`;
const ButtonHide = styled.button`
  position: relative;
  margin-right: 2px;
  border: 0px;
  width: 30px;
  height: 30px;
  left: 398px;
  top: -898px;
`;
const NameOfPage = styled.p`
position: relative;
margin-right: 2px;
border: 0px;
width: 200px;
height: 30px;
left: 447px;
top: -926px;
font-size: 22px;
font-weight: 600;
`;
const NavItem = styled.li`
  color: ${colors.green};
  font-weight: 600;
  padding: 20px 48px;
  position: relative;
  list-style: none;
  text-decoration: none;
  &.active {
    color: ${colors.red};
    &::after {
      content: '';
      width: 8px;
      height: 67px;
      background-color: ${colors.red};
      border-radius: 0px 6px 6px 0px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  /* & a {
    text-decoration: none;
    color: ${colors.green};
  } */
  & i {
    margin-right: 22px;
    /* color: ${colors.green}; */
  }
`;

const UserContainer = styled.div`
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  text-align: center;
  padding: 24px 35px;
  margin: 41px 56px 62px;
  & .sidemenu__user-name {
    font-weight: 500;
    display: block;
  }
  & .sidemenu__email {
    font-weight: 200;
    font-size: 12px;
    line-height: 18px;
    color: ${colors.light};
    margin-bottom: 16px;
    display: block;
  }
`;

const UserPhoto = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: #c5c5c5;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto 15px;
`;

const SideMenuFooter = styled.div`
  padding-left: 56px;
  & .sidemenu-footer {
    &__name {
        font-weight: 600;
        display: block;
    }
    &__copy {
        font-weight: 200;
        font-size: 14px;
        line-height: 21px;
        color:${colors.light};
        display: block;
    }
    &__made {
        margin-bottom: 50px;
        color: ${colors.green};
    }
  }
`;

const HeaderContainer = styled.header`
  box-shadow: 0px 3px 10px #00000005;
  background-color: white;
  padding: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  & .header{
    &__right {
      display: flex;
      & button {
        color: ${colors.hardGreen};
        margin-right: 22px;
      }
    }
    &__current-page {
      font-size: 22px;
      font-weight: 600;
      line-height: 42px;
    }
  }
`;

function Menus(props){
  const [content, setContent] = useState('Travl dashboard');
  const { authState, authDispatch } = useContext(AuthContext); 
  useEffect(() => {
    setContent('Travl dashboard')
  }, [authState]);
  const toggleSideMenu = () => {
      props.setOpenSideMenu(prev=>prev === false)
  }
  const navigate = useNavigate();
  const handleLogOut = event => {
      authDispatch({ type: "logout" })
      return navigate('/login');
    }
  return(
      <>
          <SideMenuContainer className={props.openSideMenu ? 'show' : 'hide'}>
          
              <Logo margin={{
              top: 0, right: '48px', bottom: '62px', left: '48px',
              }}
              /> 
              <ul>
              <NavItem id="dashboard">
              <Link to="/" onClick={()=>setContent("Dashboard")}>
              {icons.dashboard}
              Dashboard
              </Link>
              </NavItem>
              <NavItem id="bookings">
              <Link to="/bookings" onClick={()=>setContent("Bookings")}>
              {icons.bookings}
              Bookings
              </Link>
              </NavItem>
              <NavItem id="rooms">
              <Link to="/rooms" onClick={()=>setContent("Rooms")}>
              {icons.rooms}
              Rooms
              </Link>
              </NavItem>
              <NavItem id="contact">
              <Link to="/contact" onClick={()=>setContent("Contact")}>
              {icons.contact}
              Contact
              </Link>
              </NavItem>
              <NavItem id="users">
              <Link to="/users" onClick={()=>setContent("Users")}>
              {icons.users}
              Users
              </Link>
              </NavItem>
              </ul>
          <UserContainer>
          <UserPhoto />
          <span className="sidemenu__user-name">Mariana Di Primio</span>
          <span className="sidemenu__email">maruprin@mymail.com</span>
          <Button green>Editar</Button>
          </UserContainer>
          <SideMenuFooter>
          <span className="sidemenu-footer__name">Travl Hotel Admin Dashboard</span>
          <span className="sidemenu-footer__copy">© 2022 All Rights Reserved</span><br/><br/>
          <span className="sidemenu-footer__made">Made with ♥ by Maruprin</span>
          </SideMenuFooter>
          {authState.auth && <ButtonHide onClick={toggleSideMenu}>{icons.menu}</ButtonHide>}
          {authState.auth &&  <NameOfPage>{content}</NameOfPage>}
      </SideMenuContainer>

      <HeaderContainer sidemenu={props.openSideMenu} >
    
      <div className="header__right">
          <button type="button">{icons.message}</button>
          <button type="button">{icons.bell}</button>
          <button type="button" onClick={handleLogOut}>{icons.logout}</button>
      </div>
      </HeaderContainer>

      </>
  )
}

export default Menus;