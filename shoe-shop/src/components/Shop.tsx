import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";
import ProductDetails from "./ProductDetails";
import { Shoe } from "../store/slices/shoesSlice";

const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { shoes, loading, error } = useAppSelector((state) => state.shoes);
  const { items } = useAppSelector((state) => state.cart);
  
  // Local state for UI controls
  const [filters, setFilters] = useState({ category: "all", inStock: false });
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
  const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleAddToCart = (shoe: Shoe) => {
    const existingItem = items.find((item) => item.shoe.id === shoe.id);
    if (existingItem && existingItem.quantity >= shoe.maxQuantity) {
      // Simple alert instead of notification system
      alert(`Maximum quantity of ${shoe.maxQuantity} reached for ${shoe.name}`);
      return;
    }
    dispatch(addToCart(shoe));
    alert(`${shoe.name} added to cart!`);
  };

  const handleProductClick = (shoe: Shoe) => {
    setSelectedShoe(shoe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedShoe(null);
  };

  const getCurrentQuantity = (shoeId: number) => {
    const item = items.find((item) => item.shoe.id === shoeId);
    return item ? item.quantity : 0;
  };

  // Filter and sort shoes
  const filteredAndSortedShoes = shoes
    .filter((shoe) => {
      if (filters.category !== "all" && shoe.category !== filters.category)
        return false;
      if (filters.inStock && !shoe.inStock) return false;
      return true;
    })
    .sort((a, b) => {
      let aValue: any = a[sortBy as keyof Shoe];
      let bValue: any = b[sortBy as keyof Shoe];

      if (sortBy === "price") {
        aValue = parseFloat(aValue.toString());
        bValue = parseFloat(bValue.toString());
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">Our Shop</h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-12">
        Browse our collection of stylish shoes for every occasion.
      </p>

      {/* Filter and Sort Controls */}
      <div className="mb-6 sm:mb-8 lg:mb-12 p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div>
            <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="w-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Categories</option>
              <option value="Running">Running</option>
              <option value="Casual">Casual</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="category">Category</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1 sm:mb-2">
              Order
            </label>
            <select
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value as "asc" | "desc")
              }
              className="w-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) =>
                  setFilters({ ...filters, inStock: e.target.checked })
                }
                className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-xs sm:text-sm lg:text-base text-gray-700">In Stock Only</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {filteredAndSortedShoes.map((shoe) => {
          const currentQuantity = getCurrentQuantity(shoe.id);

          return (
            <div
              key={shoe.id}
              className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden rounded-md mb-3 sm:mb-4 lg:mb-6 relative">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  onClick={() => handleProductClick(shoe)}
                  title="Click to view product details"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold mb-1 sm:mb-2 lg:mb-3">{shoe.name}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-1 sm:mb-2 lg:mb-3">{shoe.description}</p>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
                ${shoe.price}
              </p>
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <span
                  className={`px-1 sm:px-2 lg:px-3 py-0.5 sm:py-1 lg:py-2 rounded text-xs sm:text-sm ${
                    shoe.inStock
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {shoe.inStock ? "In Stock" : "Out of Stock"}
                </span>
                {currentQuantity > 0 && (
                  <span className="text-xs sm:text-sm text-gray-600">
                    In cart: {currentQuantity}/{shoe.maxQuantity}
                  </span>
                )}
              </div>
              <button
                onClick={() => handleAddToCart(shoe)}
                disabled={!shoe.inStock}
                className={`w-full mt-2 sm:mt-3 lg:mt-4 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 rounded-md text-white font-medium text-xs sm:text-sm lg:text-base ${
                  !shoe.inStock
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 transition-colors duration-300 ease-out"
                }`}
              >
                {!shoe.inStock ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>

      <ProductDetails
        shoe={selectedShoe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Shop;
