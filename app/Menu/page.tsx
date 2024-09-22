import Footer from '@/components/Footer';
import Image from 'next/image'; // Import Image component from Next.js for optimization
import { FaStar } from 'react-icons/fa';

function Menu() {
  const menuItems = [
    {
      name: "Iced Latte",
      description: "Chilled espresso with milk and ice.",
      price: "₱150",
      image: "/menu_pics/iced-espresso.jpg",
      rating: 4.5,
      reviews: ["Refreshing and cool! Perfect for hot days.", "Good balance of coffee and milk."]
    },
    {
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: "₱130",
      image: "/menu_pics/iced-macchiato.jpg",
      rating: 4.6,
      reviews: ["Perfect foam!", "Rich and creamy."]
    },
    {
      name: "Espresso",
      description: "Strong and bold espresso shot.",
      price: "₱110",
      image: "/menu_pics/iced-espresso.jpg",
      rating: 4.4,
      reviews: ["A strong kick!", "Bold taste, love it."]
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk.",
      price: "₱170",
      image: "/menu_pics/iced-mocha.jpg",
      rating: 4.7,
      reviews: ["Great blend of coffee and chocolate!", "Absolutely delicious."]
    },
  ];

  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars based on the integer part of the rating
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining stars will be empty

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStar className="text-yellow-500 half-star" />} {/* Placeholder class for half star if needed */}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={i} className="text-gray-400" />
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7] mt-14">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-[#6b4e3d]">Our Menu</h1>
          <p className="text-lg text-[#8d6e5a] mt-4">
            Enjoy a variety of coffee brewed to perfection.
          </p>
        </div>

        {/* Menu Items Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between"
              style={{ minHeight: "360px" }}
            >
              {/* Image fits container exactly */}
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

                  {/* Corrected Star Ratings */}
                  <div className="flex items-center mt-2">
                    {getStars(item.rating)}
                    <span className="ml-2 text-sm text-gray-600">({item.rating.toFixed(1)})</span>
                  </div>
                </div>

                {/* Order Button */}
                <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-full px-6 py-2 flex items-center justify-center transition-colors duration-300">
                  Order Now
                </button>

                {/* Static Review Section */}
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
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between"
              style={{ minHeight: "360px" }}
            >
              {/* Image fits container exactly */}
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

                  {/* Corrected Star Ratings */}
                  <div className="flex items-center mt-2">
                    {getStars(item.rating)}
                    <span className="ml-2 text-sm text-gray-600">({item.rating.toFixed(1)})</span>
                  </div>
                </div>

                {/* Order Button */}
                <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-full px-6 py-2 flex items-center justify-center transition-colors duration-300">
                  Order Now
                </button>

                {/* Static Review Section */}
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
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between"
              style={{ minHeight: "360px" }}
            >
              {/* Image fits container exactly */}
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

                  {/* Corrected Star Ratings */}
                  <div className="flex items-center mt-2">
                    {getStars(item.rating)}
                    <span className="ml-2 text-sm text-gray-600">({item.rating.toFixed(1)})</span>
                  </div>
                </div>

                {/* Order Button */}
                <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-full px-6 py-2 flex items-center justify-center transition-colors duration-300">
                  Order Now
                </button>

                {/* Static Review Section */}
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
      <Footer />
    </div>
  );
}

export default Menu;
