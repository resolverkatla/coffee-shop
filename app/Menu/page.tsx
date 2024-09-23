"use client";

import { useState } from 'react'; // Import useState hook
import Footer from '@/components/Footer';
import Image from 'next/image'; // Import Image component from Next.js for optimization
import { FaStar, FaSearch } from 'react-icons/fa'; // Add FaSearch icons

function Menu() {
  // State to store search query, selected size, and dietary preference
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState(''); // New state for dietary filter

  // Menu items data with size and dietary properties added
  const menuItems = [
    {
      name: "Iced Latte",
      description: "Chilled espresso with milk and ice.",
      price: "₱150",
      size: "medium",
      dietary: "vegan", // New dietary property
      image: "/menu_pics/iced-espresso.jpg",
      rating: 4.5,
      reviews: ["Refreshing and cool! Perfect for hot days.", "Good balance of coffee and milk."]
    },
    {
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: "₱130",
      size: "small",
      dietary: "gluten-free", // New dietary property
      image: "/menu_pics/iced-macchiato.jpg",
      rating: 4.6,
      reviews: ["Perfect foam!", "Rich and creamy."]
    },
    {
      name: "Espresso",
      description: "Strong and bold espresso coffee shot.",
      price: "₱110",
      size: "small",
      dietary: "gluten-free",
      image: "/menu_pics/iced-espresso.jpg",
      rating: 4.4,
      reviews: ["A strong kick!", "Bold taste, love it."]
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk.",
      price: "₱170",
      size: "large",
      dietary: "none",
      image: "/menu_pics/iced-mocha.jpg",
      rating: 4.7,
      reviews: ["Great blend of coffee and chocolate!", "Absolutely delicious."]
    },
  ];

  // Function to filter menu items based on search query, size, and dietary preference
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (sizeFilter ? item.size === sizeFilter : true) &&
    (dietaryFilter ? item.dietary === dietaryFilter : true) // Include dietary filter
  );

  // Star rating function
  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5; // Check if there's at least half
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStar key="half" className="text-yellow-500 half-star" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-400" />
        ))}
      </>
    );
  };

  // Render menu items
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7] mt-14">

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-[#6b4e3d]">Our Menu</h1>
          <p className="text-lg text-[#8d6e5a] mt-4">Enjoy a variety of coffee brewed to perfection.</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute top-2 left-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#6b4e3d] w-full text-[#6b4e3d]"
            />
          </div>

          {/* Size Filter */}
          <select
            value={sizeFilter}
            onChange={(e) => setSizeFilter(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#6b4e3d] text-[#6b4e3d]"
          >
            <option value="">All Sizes</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          {/* Dietary Preference Filter */}
          <select
            value={dietaryFilter}
            onChange={(e) => setDietaryFilter(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#6b4e3d] text-[#6b4e3d]"
          >
            <option value="">All Dietary Preferences</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
            <option value="none">None</option>
          </select>
        </div>

        {/* Menu Items Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-10 ${filteredItems.length < 4 ? "justify-center" : ""}`}>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between"
              style={{ minHeight: "360px" }}
            >
              {/* Image */}
              <div className="w-full h-44 relative overflow-hidden rounded-t-lg m-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 text-center flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#6b4e3d]">
                    {item.name}
                  </h2>
                  <p className="text-sm text-[#8d6e5a]">{item.description}</p>
                  <p className="text-md font-bold text-[#6b4e3d]">
                    {item.price}
                  </p>

                  {/* Star Ratings */}
                  <div className="flex items-center mt-2">
                    {getStars(item.rating)}
                    <span className="ml-2 text-sm text-gray-600">({item.rating.toFixed(1)})</span>
                  </div>
                </div>

                {/* Order Button */}
                <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-full px-6 py-2 flex items-center justify-center transition-colors duration-300">
                  Order Now
                </button>

                {/* Review Section */}
                <div className="text-sm text-left text-gray-600 mt-4">
                  <p className="font-semibold">Reviews:</p>
                  <ul>
                    {item.reviews.slice(0, 2).map((review, idx) => (
                      <li key={idx}>- {review}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Items Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-10 ${filteredItems.length < 4 ? "justify-center" : ""}`}>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between"
              style={{ minHeight: "360px" }}
            >
              {/* Image */}
              <div className="w-full h-44 relative overflow-hidden rounded-t-lg m-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 text-center flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#6b4e3d]">
                    {item.name}
                  </h2>
                  <p className="text-sm text-[#8d6e5a]">{item.description}</p>
                  <p className="text-md font-bold text-[#6b4e3d]">
                    {item.price}
                  </p>

                  {/* Star Ratings */}
                  <div className="flex items-center mt-2">
                    {getStars(item.rating)}
                    <span className="ml-2 text-sm text-gray-600">({item.rating.toFixed(1)})</span>
                  </div>
                </div>

                {/* Order Button */}
                <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-full px-6 py-2 flex items-center justify-center transition-colors duration-300">
                  Order Now
                </button>

                {/* Review Section */}
                <div className="text-sm text-left text-gray-600 mt-4">
                  <p className="font-semibold">Reviews:</p>
                  <ul>
                    {item.reviews.slice(0, 2).map((review, idx) => (
                      <li key={idx}>- {review}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* Menu Items Section */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-10 ${filteredItems.length < 4 ? "justify-center" : ""}`}>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between"
              style={{ minHeight: "360px" }}
            >
              {/* Image */}
              <div className="w-full h-44 relative overflow-hidden rounded-t-lg m-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 text-center flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#6b4e3d]">
                    {item.name}
                  </h2>
                  <p className="text-sm text-[#8d6e5a]">{item.description}</p>
                  <p className="text-md font-bold text-[#6b4e3d]">
                    {item.price}
                  </p>

                  {/* Star Ratings */}
                  <div className="flex items-center mt-2">
                    {getStars(item.rating)}
                    <span className="ml-2 text-sm text-gray-600">({item.rating.toFixed(1)})</span>
                  </div>
                </div>

                {/* Order Button */}
                <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-full px-6 py-2 flex items-center justify-center transition-colors duration-300">
                  Order Now
                </button>

                {/* Review Section */}
                <div className="text-sm text-left text-gray-600 mt-4">
                  <p className="font-semibold">Reviews:</p>
                  <ul>
                    {item.reviews.slice(0, 2).map((review, idx) => (
                      <li key={idx}>- {review}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
      {/* Footer section from components */}
      <Footer />
    </div>
  );
}

export default Menu;
