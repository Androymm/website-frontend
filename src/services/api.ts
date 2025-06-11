const API_URL = 'http://localhost:3001/api/auth';

export async function login(user_email: string, user_password: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_email, user_password }),
  });

  return res.json();
}

export async function register(user_name: string, user_email: string, user_password: string) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_name, user_email, user_password }),
  });

  return res.json();
}