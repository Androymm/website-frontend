// src/pages/Home.tsx
import React from 'react';
import { Navbar } from '../components/NavBar';

export function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 20 }}>
        <h1>Bienvenue sur MonSite</h1>
        <p>Contenu principal...</p>
      </main>
    </>
  );
}

export default Home;