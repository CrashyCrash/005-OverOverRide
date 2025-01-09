import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">Unicorn Commander</div>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/centerdeep">CenterDeep</a>
          <a href="/commandcanvas">CommandCanvas</a>
          <a href="/crc">CRC</a>
          <a href="/magicode">MagiCode</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
