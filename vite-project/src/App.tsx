import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Dashboard from './Dashboard'; 
import Leaves from "./Leaves"

function App() {
  return (
    <>
      {/* <Dashboard /> Use the Dashboard component here */}
      <Leaves />
    </>
  );
}

export default App;
