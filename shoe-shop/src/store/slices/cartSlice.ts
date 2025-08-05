import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shoe } from './shoesSlice';

export interface CartItem {
  shoe: Shoe;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Shoe>) => {
      const existingItem = state.items.find(item => item.shoe.id === action.payload.id);
      if (existingItem) {
        // Only increase quantity if it's below the maximum limit for this specific shoe
        if (existingItem.quantity < action.payload.maxQuantity) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({ shoe: action.payload, quantity: 1 });
      }
      state.total = state.items.reduce((sum, item) => sum + (item.shoe.price * item.quantity), 0);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.shoe.id !== action.payload);
      state.total = state.items.reduce((sum, item) => sum + (item.shoe.price * item.quantity), 0);
    },
    updateQuantity: (state, action: PayloadAction<{ shoeId: number; quantity: number }>) => {
      const item = state.items.find(item => item.shoe.id === action.payload.shoeId);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(item => item.shoe.id !== action.payload.shoeId);
        } else {
          // Enforce maximum quantity limit for this specific shoe
          item.quantity = Math.min(action.payload.quantity, item.shoe.maxQuantity);
        }
      }
      state.total = state.items.reduce((sum, item) => sum + (item.shoe.price * item.quantity), 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 