import React, { useState } from 'react';
import { handleRegister } from '../controllers/authController';

export default function RegisterView() {
  const [user_name, setName] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(user_name, user_email, user_password, setMessage);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Inscription</h2>
      <input value={user_name} onChange={(e) => setName(e.target.value)} placeholder="Nom d'utilisateur" />
      <input type="email" value={user_email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={user_password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">S'inscrire</button>
      <p>{message}</p>
    </form>
  );
}
