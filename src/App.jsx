import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard'; // crea este componente
import Cobrar from './pages/cobrar';
import Recarga from './pages/recarga';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cobrar" element={<Cobrar />} />
        <Route path="/recarga" element={<Recarga/>} />
      </Routes>
    </Router>
  );
}

export default App;
