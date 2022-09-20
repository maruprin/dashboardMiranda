import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import ViewBookings from './pages/ViewBookings';
import ViewRooms from './pages/ViewRooms';
import ViewContact from './pages/ViewContact';
import ViewUsers from './pages/ViewUsers';
import UpdateBooking from './components/UpdateBooking';
import UpdateRoom from './components/UpdateRoom';
import UpdateUser from './components/UpdateUser';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [auth, setAuth] = useState(true);
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/" element={
        <PrivateRoute auth={auth}>
          <Dashboard />
        </PrivateRoute>}
      />
      
      <Route path="/bookings" element={
        <PrivateRoute auth={auth}>
          <ViewBookings />
        </PrivateRoute>} 
      />

      <Route path="/bookings/:booking_id" element={
        <PrivateRoute auth={auth}>
          <UpdateBooking />
        </PrivateRoute>} 
      />

      <Route path="/rooms" element={
        <PrivateRoute auth={auth}>
          <ViewRooms />
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

  );
}

export default App;