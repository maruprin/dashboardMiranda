import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';
import icons from '../styles/icons';


const HeaderContainer = styled.header`
  box-shadow: 0px 3px 10px #00000005;
  background-color: white;
  padding: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  & .header{
    &__left {
      display: flex;
      & button {
        margin-right: 2px;
        border: 0px;
      }
    }
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
function HeaderMenu() {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const path = pathname === '' ? 'Dashboard' : pathname.charAt(0).toUpperCase() + pathname.slice(1);

  const toggleMenu = () => {
    const sidemenu = document.querySelector('#sidemenu');
    if (sidemenu.classList.contains('hide')) {
      sidemenu.classList.remove('hide');
    } else {
      sidemenu.classList.add('hide');
    }
  };
  return (
    <HeaderContainer>
      <div className="header__left">
        <button type="button" onClick={toggleMenu}>{icons.menu}</button>
        <span className="header__current-page">{path}</span>
      </div>
      <div className="header__right">
        <button type="button">{icons.message}</button>
        <button type="button">{icons.bell}</button>
        <button type="button">{icons.logout}</button>
      </div>
    </HeaderContainer>
  );
}

export default HeaderMenu;