// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ← Tu importes ton composant principal
import './index.css'; // ← Si tu as du CSS global

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* Tu montes ton app ici */}
  </React.StrictMode>
);
