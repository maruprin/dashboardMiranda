import React, { useEffect, useReducer, useState } from 'react';
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

const logKey = 'log'
const initialState = localStorage.getItem(logKey) ? JSON.parse(localStorage.getItem(logKey)) : { auth:false, userName: null, email:null, id: null };

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'login':
        return {auth: true, userName: action.payload.userName, email: action.payload.email, id: action.payload.id};
    case 'logout':
        localStorage.removeItem(logKey);
        return {auth: false, userName: null, email: null, id: null };
    case 'changeName':
        return {...state, userName: action.payload.userName};
    case 'changeEmail':
        return {...state, email: action.payload.email};
    default:
      throw new Error();
  }
}
export const AuthContext = React.createContext();

function App() {
  const [authState, authDispatch] = useReducer(reducer, initialState);
  const [openSideMenu, setOpenSideMenu] = useState(true);

  useEffect(() => {
    if(authState.auth){localStorage.setItem(logKey, JSON.stringify(authState));}
  }, [authState]);

  return (
    <AuthContext.Provider value={{authState, authDispatch}}>
    <>
    <Router basename={process.env.PUBLIC_URL}>
    <Menus openSideMenu={openSideMenu && authState.auth} setOpenSideMenu={setOpenSideMenu}/>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>}
      />
      
      <Route path="/bookings" element={
        <PrivateRoute>
          <Bookings openSideMenu={openSideMenu} />
        </PrivateRoute>} 
      />

      <Route path="/bookings/:booking_id" element={
        <PrivateRoute>
          <UpdateBooking />
        </PrivateRoute>} 
      />

      <Route path="/rooms" element={
        <PrivateRoute>
          <Rooms openSideMenu={openSideMenu} />
        </PrivateRoute>} 
      />

      <Route path="/rooms/:room_id" element={
        <PrivateRoute>
          <UpdateRoom />
        </PrivateRoute>} 
      />

      <Route path="/contact" element={
        <PrivateRoute>
          <Contact openSideMenu={openSideMenu} />
        </PrivateRoute>} 
      />

      <Route path="/users" element={
        <PrivateRoute>
          <Users openSideMenu={openSideMenu} />
        </PrivateRoute>}
      />

      <Route path="/users/:user_id" element={
        <PrivateRoute>
          <UpdateUser />
        </PrivateRoute>} 
      />

    </Routes>
  </Router>
  </>
  </AuthContext.Provider>
  );
}

export default App;