import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import Users from './pages/Users';
import UpdateBooking from './components/UpdateBooking';
import UpdateRoom from './components/UpdateRoom';
import UpdateUser from './components/UpdateUser';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Menus from './components/Menus';
import Bookings from './pages/Bookings';

export const MyContext = React.createContext();


function App() {
  const logKey = 'log'
  
  const isLogged = () => {
    let logState = JSON.parse(localStorage.getItem(logKey))
    if(logState === null){
      logState = false;
    }
    return logState
  }
  const [auth, setAuth] = useState(isLogged());
  const [openSideMenu, setOpenSideMenu] = useState(true);

  const contextValue = {auth,setAuth}

  useEffect(() => {
    localStorage.setItem(logKey, JSON.stringify(auth));
  }, [auth]);

  return (
    <MyContext.Provider value={contextValue}>
    <>
    <Router basename={process.env.PUBLIC_URL}>
    <Menus openSideMenu={openSideMenu && auth} auth={auth} setOpenSideMenu={setOpenSideMenu} setAuth={setAuth}/>
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/" element={
        <PrivateRoute auth={auth}>
          <Dashboard setAuth={setAuth} />
        </PrivateRoute>}
      />
      
      <Route path="/bookings" element={
        <PrivateRoute auth={auth}>
          <Bookings openSideMenu={openSideMenu} />
        </PrivateRoute>} 
      />

      <Route path="/bookings/:booking_id" element={
        <PrivateRoute auth={auth}>
          <UpdateBooking />
        </PrivateRoute>} 
      />

      <Route path="/rooms" element={
        <PrivateRoute auth={auth}>
          <Rooms openSideMenu={openSideMenu} />
        </PrivateRoute>} 
      />

      <Route path="/rooms/:room_id" element={
        <PrivateRoute auth={auth}>
          <UpdateRoom />
        </PrivateRoute>} 
      />

      <Route path="/contact" element={
        <PrivateRoute auth={auth}>
          <Contact openSideMenu={openSideMenu} />
        </PrivateRoute>} 
      />

      <Route path="/users" element={
        <PrivateRoute auth={auth}>
          <Users openSideMenu={openSideMenu} />
        </PrivateRoute>}
      />

      <Route path="/users/:user_id" element={
        <PrivateRoute auth={auth}>
          <UpdateUser />
        </PrivateRoute>} 
      />

    </Routes>
  </Router>
  </>
  </MyContext.Provider>
  );
}

export default App;