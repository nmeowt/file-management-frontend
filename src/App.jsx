import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/login/Login';
import { Route } from "react-router-dom";
import UserContext from './context/UserContext';
import { useContext, useEffect } from 'react';
import { Auth } from './api/auth';
import BuildRoute from './components/BuildRoute';

function App() {
  const { isLogined, setIsLogined } = useContext(UserContext)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    const auth = Auth.isAuthen();

    if (auth) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }

  return (
    <BuildRoute
      isLogined={isLogined}
      unauthorizeRoutes={<Login />}
    >
      <Route path="/" element={<Dashboard />} />
      <Route path="/folder/:id" element={<Dashboard />} />
    </BuildRoute>
  );
}

export default App;
