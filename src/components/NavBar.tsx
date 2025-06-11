// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="flex items-center p-4 bg-gray-800 text-white">
      <div className="font-bold text-xl">MonSite</div>
      <div className="flex-grow" />
      <a href="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
        Se connecter
      </a>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    height: '60px',
    backgroundColor: '#333',
    color: 'white',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  spacer: {
    flexGrow: 1,
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
  },
};
