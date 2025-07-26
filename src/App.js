import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './startPage';
import HomePage from './homePage';
import OriginPage from './originPage';
import RisePage from './risePage';
import FgsPage from './fgsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/origins" element={<OriginPage />} />
      <Route path="/home/rise" element={<RisePage />} />
      <Route path="/home/fgs" element={<FgsPage />} />
    </Routes>
  );
}

export default App;
