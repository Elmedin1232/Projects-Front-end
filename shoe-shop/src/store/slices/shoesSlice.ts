import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Import images
import adidasOzelia from "../../imgs/adidas-ozelia.png";
import adidasSl72 from "../../imgs/adidas-sl 72.png";
import adidasTerrex from "../../imgs/adidas-terrex.png";
import adidasUltraboost from "../../imgs/adidas-ultraboost_22.png";
import nikeAirMax from "../../imgs/nike-air max 270.png";
import nikeP6000 from "../../imgs/nike-p-6000.png";
import nikeZoomVomero from "../../imgs/nike-zoom vomero 5.png";
import pumaHStreet from "../../imgs/puma-H-Street.png";
import pumaSpeedcat from "../../imgs/puma-speedcat leather.png";

export interface Shoe {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  maxQuantity: number;
}

interface ShoesState {
  shoes: Shoe[];
  loading: boolean;
  error: string | null;
}

const initialState: ShoesState = {
  shoes: [
    {
      id: 1,
      name: "Adidas Ozelia",
      category: "Running",
      price: 149.59,
      description:
        "Premium running shoes with responsive cushioning and breathable design",
      image: adidasOzelia,
      inStock: true,
      maxQuantity: 5,
    },
    {
      id: 2,
      name: "Adidas SL 72",
      category: "Casual",
      price: 89.59,
      description: "Classic retro sneakers with timeless style and comfort",
      image: adidasSl72,
      inStock: true,
      maxQuantity: 4,
    },
    {
      id: 3,
      name: "Adidas Terrex",
      category: "Outdoor",
      price: 127.59,
      description: "Durable outdoor shoes perfect for hiking and adventure",
      image: adidasTerrex,
      inStock: true,
      maxQuantity: 3,
    },
    {
      id: 4,
      name: "Adidas Ultraboost 22",
      category: "Running",
      price: 176,
      description:
        "Premium running shoes with responsive cushioning and energy return",
      image: adidasUltraboost,
      inStock: true,
      maxQuantity: 4,
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      category: "Running",
      price: 156,
      description: "Iconic running shoes with maximum comfort and style",
      image: nikeAirMax,
      inStock: true,
      maxQuantity: 4,
    },
    {
      id: 6,
      name: "Nike P-6000",
      category: "Casual",
      price: 114.59,
      description:
        "Retro-inspired sneakers with modern comfort and classic appeal",
      image: nikeP6000,
      inStock: true,
      maxQuantity: 2,
    },
    {
      id: 7,
      name: "Nike Zoom Vomero 5",
      category: "Running",
      price: 142,
      description:
        "High-performance running shoes with advanced cushioning technology",
      image: nikeZoomVomero,
      inStock: true,
      maxQuantity: 3,
    },
    {
      id: 8,
      name: "Puma H-Street",
      category: "Casual",
      price: 83.59,
      description:
        "Street-style sneakers with urban appeal and everyday comfort",
      image: pumaHStreet,
      inStock: false,
      maxQuantity: 0,
    },
    {
      id: 9,
      name: "Puma Speedcat Leather",
      category: "Casual",
      price: 94,
      description:
        "Premium leather sneakers with racing-inspired design and comfort",
      image: pumaSpeedcat,
      inStock: true,
      maxQuantity: 5,
    },
  ],
  loading: false,
  error: null,
};

const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addShoe: (state, action: PayloadAction<Shoe>) => {
      state.shoes.push(action.payload);
    },
    updateShoe: (state, action: PayloadAction<Shoe>) => {
      const index = state.shoes.findIndex(
        (shoe) => shoe.id === action.payload.id
      );
      if (index !== -1) {
        state.shoes[index] = action.payload;
      }
    },
    removeShoe: (state, action: PayloadAction<number>) => {
      state.shoes = state.shoes.filter((shoe) => shoe.id !== action.payload);
    },
  },
});

export const { setLoading, setError, addShoe, updateShoe, removeShoe } =
  shoesSlice.actions;
export default shoesSlice.reducer;
