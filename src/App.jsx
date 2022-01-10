import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Auth } from './api/auth';
import RequireAuth from './routes/login/RequireAuth';

function App() {
  const { setIsLogined } = useContext(UserContext)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    let auth = Auth.isAuthen();
    if (auth) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }

  return (
    <Router>
      <Routes>
        <Route index path="/" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="/folder/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
