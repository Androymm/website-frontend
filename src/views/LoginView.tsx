import React, { useState } from 'react';
import { handleLogin } from '../controllers/authController';

export default function LoginView() {
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(user_email, user_password, setMessage);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Connexion</h2>
      <input type="email" value={user_email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={user_password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
      <p>{message}</p>
    </form>
  );
}
