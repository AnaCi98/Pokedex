/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Searcher from './Components/Searcher';
import Home from './Components/Home';

function App() {
  const [modalMenu, setMenu] = useState(false);
  const [classInitial, setClass] = useState('imageMenu');
  const closeMenu = () => {
    setMenu(false);
    setClass('imageMenu');
  };
  const openMenu = () => {
    setMenu(true);
    setClass('imageMenuClose');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home classInitial={classInitial} openMenu={openMenu} modalMenu={modalMenu} closeMenu={closeMenu} />} />
        <Route path="/search-pokemon" element={<Searcher classInitial={classInitial} openMenu={openMenu} modalMenu={modalMenu} closeMenu={closeMenu} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
