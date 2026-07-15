import React, { useState } from 'react';
import { api } from '../services/api';
import { AuthContext } from './AuthContextObject';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      try {
        return JSON.parse(storedUser);
      } catch {
        localStorage.removeItem('user');
        return null;
      }
    }
    return null;
  });

  const [loading] = useState(false);

  const login = async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    const { token, data } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { name, email, password });
    const { token, data } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  };

  const demoLogin = async () => {
    const response = await api.post('/auth/demo');
    const { token, data } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        demoLogin,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}