import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard'; // Import your Dashboard component here
import RecipeList from './Recipe';
import Orders from './Orders';
import Leave from './Leaves';
import Login from './Login';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  
  return (

    // <>
    //   <Dashboard /> {/* Use the Dashboard component here */}
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/leaves" element={<Leave />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/orders" element={<Orders />} ></Route>
        <Route ></Route>
      </Routes>
    </Router>
  );
}

export default App;
