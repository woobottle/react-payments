import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CardIndexPage from './pages/card';
import CardNewPage from './pages/card/new';
import CardConfirmPage from './pages/card/confirm';
import { CardProps } from '@interface';
import { initialNewCard } from '@constants';

const App = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [newCard, setNewCard] = useState<CardProps>(initialNewCard);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardIndexPage cards={cards} />} />
        <Route path="/new" element={<CardNewPage newCard={newCard} setNewCard={setNewCard} />} />
        <Route path="/complete" element={<CardConfirmPage />} />
      </Routes>
    </div>
  );
};

export default App;
