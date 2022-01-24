import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardIndexPage from './pages/card';
import CardNewPage from './pages/card/new';
import CardConfirmPage from './pages/card/confirm';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardIndexPage />} />
        <Route path="/new" element={<CardNewPage />} />
        <Route path="/complete" element={<CardConfirmPage />} />
      </Routes>
    </div>
  );
};

export default App;
