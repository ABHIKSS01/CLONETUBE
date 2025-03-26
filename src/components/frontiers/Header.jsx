import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import '../../styles/components/header.css';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <div className="logo" onClick={() => navigate('/')}>
          <i className="fab fa-youtube"></i>
          <span>CloneTube</span>
        </div>
      </div>
      
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      
      <div className="header-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
        <button className="create-button">
          <i className="fas fa-video"></i>
        </button>
        <button className="profile-button">
          <img src="https://via.placeholder.com/36" alt="Profile" />
        </button>
      </div>
    </header>
  );
};

export default Header;
