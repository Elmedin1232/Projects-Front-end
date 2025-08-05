import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginSuccess, logout } from '../slices/authSlice';

interface LoginCredentials {
  email: string;
  password: string;
}

// Simulated API call for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: LoginCredentials, { dispatch }) => {
    try {
      // In a real app, this would be an API call
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const userData = {
        id: '1',
        email: credentials.email,
        name: 'User',
        preferences: {
          favoriteCategories: [],
          sizePreference: '',
          brandPreference: []
        }
      };
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Dispatch login action
      dispatch(loginSuccess({ user: userData, token: 'mock-token' }));
      
      return userData;
    } catch (error) {
      throw new Error('Login failed');
    }
  }
);

// Logout thunk
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch }) => {
    try {
      // Clear localStorage
      localStorage.removeItem('user');
      
      // Dispatch logout action
      dispatch(logout());
      
      return true;
    } catch (error) {
      throw new Error('Logout failed');
    }
  }
);