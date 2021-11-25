import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Login from './routes/login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BreadCrumb from './components/BreadCrumbs';
import { Separator } from './utils/helper';

const options = {
  items: [
    { to: '/', label: 'My file' },
  ]
}

function App() {
  return (
    <Router>
      <BreadCrumb separator={<Separator>/</Separator>}>
        {
          options.items.map(({ to, label }) => {
            return (
              <div key={to} className='breadcrumb-container'>
                <Link to={to}>{label}</Link>
              </div>
            )
          })
        }
      </BreadCrumb>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/folder/:id" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
