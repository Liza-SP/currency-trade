import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArchivePage from './components/ArchivePage';
import NavBar from './components/NavBar';
import NoPage from './components/NoPage';
import TradingPage from './components/TradingPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TradingPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
