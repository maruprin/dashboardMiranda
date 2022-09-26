import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ViewRooms from './pages/ViewRooms';
import ViewContact from './pages/ViewContact';
import ViewUsers from './pages/ViewUsers';
import UpdateBooking from './components/UpdateBooking';
import UpdateRoom from './components/UpdateRoom';
import UpdateUser from './components/UpdateUser';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Menus from './components/Menus';
import GenericContainer from './pages/GenericContainer';
import { bookingItemHaveButton, bookingsData, headersBookings, tableHeadersBookings } from './data/bookingsData';
import { headersRooms, roomsData, roomsItemHaveButton, tableHeadersRooms } from './data/roomsData';




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
  
  useEffect(() => {
    localStorage.setItem(logKey, JSON.stringify(auth));
  }, [auth]);

  return (
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
          <GenericContainer menuHeader={headersBookings} 
                            tableHeader={tableHeadersBookings} 
                            tableData={bookingsData} 
                            haveButton={bookingItemHaveButton}
                            openSideMenu={openSideMenu} 
          />

        </PrivateRoute>} 
      />

      <Route path="/bookings/:booking_id" element={
        <PrivateRoute auth={auth}>
          <UpdateBooking />
        </PrivateRoute>} 
      />

      <Route path="/rooms" element={
        <PrivateRoute auth={auth}>
          <GenericContainer menuHeader={headersRooms} 
                            tableHeader={tableHeadersRooms} 
                            tableData={roomsData} 
                            haveButton={roomsItemHaveButton}
                            openSideMenu={openSideMenu} 
          />
        </PrivateRoute>} 
      />

      <Route path="/rooms/:room_id" element={
        <PrivateRoute auth={auth}>
          <UpdateRoom />
        </PrivateRoute>} 
      />

      <Route path="/contact" element={
        <PrivateRoute auth={auth}>
          <ViewContact />
        </PrivateRoute>} 
      />

      <Route path="/users" element={
        <PrivateRoute auth={auth}>
          <ViewUsers />
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
  );
}

export default App;