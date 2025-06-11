import * as api from '../services/api';

export const handleLogin = async (email: string, password: string, setMessage: (msg: string) => void) => {
  const result = await api.login(email, password);
  setMessage(result.message);
  if (result.token) {
    localStorage.setItem('token', result.token);
  }
};

export const handleRegister = async (name: string, email: string, password: string, setMessage: (msg: string) => void) => {
  const result = await api.register(name, email, password);
  setMessage(result.message);
};