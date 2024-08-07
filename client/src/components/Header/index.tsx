"use client";
import React from 'react';
import ChainDropdown from '../ChainDropdown';

const Header = () => {
  return (
    <header className="bg-dark-2 py-3 px-6 flex items-center justify-between shadow-md sticky top-0 z-30">
      <div className="flex-grow"></div>
      <div className="relative">
        <ChainDropdown />
      </div>
    </header>
  );
};

export default Header;
