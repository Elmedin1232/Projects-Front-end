import React from "react";
import { Shoe } from "../store/slices/shoesSlice";

interface ProductDetailsProps {
  shoe: Shoe | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ shoe, isOpen, onClose }) => {
  if (!isOpen || !shoe) return null;

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case "Running":
        return {
          description: "Perfect for jogging, training, and athletic activities",
          features: ["Cushioned sole", "Breathable design", "Lightweight construction", "Shock absorption"],
          bestFor: "Running, jogging, gym workouts, and athletic training"
        };
      case "Casual":
        return {
          description: "Comfortable everyday shoes for daily wear",
          features: ["Comfortable fit", "Versatile style", "Durable construction", "Easy to pair"],
          bestFor: "Daily wear, casual outings, and street style"
        };
      case "Outdoor":
        return {
          description: "Rugged shoes designed for outdoor adventures",
          features: ["Water-resistant", "Durable materials", "Grip sole", "Protective design"],
          bestFor: "Hiking, outdoor activities, and adventure sports"
        };
      default:
        return {
          description: "Versatile shoes for various activities",
          features: ["Comfortable", "Durable", "Stylish", "Functional"],
          bestFor: "General use and various activities"
        };
    }
  };

  const categoryInfo = getCategoryInfo(shoe.category);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{shoe.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Information</h3>
                <p className="text-gray-600 mb-3">{shoe.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">${shoe.price}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    shoe.inStock 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {shoe.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Category: {shoe.category}</h3>
                <p className="text-gray-600 mb-3">{categoryInfo.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Best For</h3>
                <p className="text-gray-600">{categoryInfo.bestFor}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {categoryInfo.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 