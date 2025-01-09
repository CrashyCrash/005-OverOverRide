import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HierarchyLayout from './components/HierarchyLayout';
import CenterDeep from './pages/CenterDeep';
import CommandCanvas from './pages/CommandCanvas';
import CRC from './pages/CRC';
import MagiCode from './pages/MagiCode';
import CognitiveCompanion from './pages/CognitiveCompanion';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HierarchyLayout />} />
        <Route path="/centerdeep" element={<CenterDeep />} />
        <Route path="/commandcanvas" element={<CommandCanvas />} />
        <Route path="/crc" element={<CRC />} />
        <Route path="/magicode" element={<MagiCode />} />
        <Route path="/cognitivecompanion" element={<CognitiveCompanion />} />
      </Routes>
    </div>
  );
}

export default App;
