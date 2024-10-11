import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard'; // Import your Dashboard component here
import RecipeList from './Recipe';
import Orders from './Orders';
import Leave from './Leaves';
<<<<<<< HEAD
import Login from './Login';
=======
import EmployeesPage from './pages/EmployeesPage';
>>>>>>> 960db56d0a2159da0fe711470f0b43e2dc61dc2b

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
        {/* <Route path="/orders" element={<Orders />}></Route> */}
        <Route path="/leaves" element={<Leave />} />
        <Route ></Route>
        <Route path="/employees" element={<EmployeesPage />} />
        <Route ></Route>
      </Routes>
    </Router>
  );
}

export default App;
