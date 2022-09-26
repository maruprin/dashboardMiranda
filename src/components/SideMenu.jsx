
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';
import icons from '../styles/icons';
import { Button, Logo } from '../styles/styledComponents';

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
    display: none;
  }
`;

const NavItem = styled.li`
  color: ${colors.green};
  font-weight: 600;
  padding: 20px 48px;
  position: relative;
  list-style: none;
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
  & a {
    text-decoration: none;
  }
  & i {
    margin-right: 22px;
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
        color: ${colors.lightRed};
    }
  }
`;

function SideMenu() {
    const location = useLocation();

  useEffect(() => {
    let path = location.pathname.split('/')[1];
    if (path === '') path = 'dashboard';

    const activeItem = document.querySelector(`#${path}`);
    activeItem.classList.add('active');

    return (() => activeItem.classList.remove('active'));
  }, [location]);
  
    return(
        <SideMenuContainer className='hide' id="sidemenu">
        <Logo margin={{
          top: 0, right: '48px', bottom: '62px', left: '48px',
        }}
        />
        <ul>
          <NavItem id="dashboard">
            <Link to="/">
            {icons.dashboard}
            {' '}
              Dashboard
            </Link>
          </NavItem>
          <NavItem id="bookings">
            <Link to="/bookings">
              {icons.bookings}
              {' '}
              Bookings
            </Link>
          </NavItem>
          <NavItem id="rooms">
            <Link to="/rooms">
              {icons.rooms}
              {' '}
              Rooms
            </Link>
          </NavItem>
          <NavItem id="contact">
            <Link to="/contact">
              {icons.contact}
              {' '}
              Contact
            </Link>
          </NavItem>
          <NavItem id="users">
            <Link to="/users">
              {icons.users}
              {' '}
              Users
            </Link>
          </NavItem>
        </ul>
        <UserContainer>
          <UserPhoto />
          <span className="sidemenu__user-name">Pablo Gutierrez</span>
          <span className="sidemenu__email">pablogt@mymail.com</span>
          <Button green>Editar</Button>
        </UserContainer>
        <SideMenuFooter>
          <span className="sidemenu-footer__name">Travl Hotel Admin Dashboard</span>
          <span className="sidemenu-footer__copy">© 2022 All Rights Reserved</span><br/><br/>
          <span className="sidemenu-footer__made">Made with ♥ by Maruprin</span>
        </SideMenuFooter>
      </SideMenuContainer>
        )
}
export default SideMenu;