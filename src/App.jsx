import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/folder/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
