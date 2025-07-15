import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './startPage';
import Home from './homePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
