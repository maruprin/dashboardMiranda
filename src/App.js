import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ViewBookings from './components/ViewBookings';
import ViewRooms from './components/ViewRooms';
import ViewContact from './components/ViewContact';
import ViewUsers from './components/ViewUsers';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/bookings" element={<ViewBookings />} />
      <Route path="/rooms" element={<ViewRooms />} />
      <Route path="/contact" element={<ViewContact />} />
      <Route path="/users" element={<ViewUsers />} />

    </Routes>
  </Router>
  );
}

export default App;