import Image from 'next/image'; // Import Image component from Next.js for optimization

function Menu() {
  const menuItems = [
    {
      name: "Iced Latte",
      description: "Chilled espresso with milk and ice.",
      price: "₱150",
      image: "/menu_pics/iced-espresso.jpg",
      rating: "4.5",
    },
    {
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: "₱130",
      image: "/menu_pics/iced-macchiato.jpg",
      rating: "4.6",
    },
    {
      name: "Espresso",
      description: "Strong and bold espresso shot.",
      price: "₱110",
      image: "/menu_pics/iced-espresso.jpg",
      rating: "4.4",
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk.",
      price: "₱170",
      image: "/menu_pics/iced-mocha.jpg",
      rating: "4.7",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7] mt-8">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Header Section */}
        <div className="text-center mb-20"> {/* Increased margin-bottom to create more space */}
          <h1 className="text-5xl font-extrabold text-[#6b4e3d]">Our Menu</h1>
          <p className="text-lg text-[#8d6e5a] mt-4">
            Enjoy a variety of coffee brewed to perfection.
          </p>
        </div>

        {/* Menu Items Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
              style={{ minHeight: "360px" }} // Adjusting card size
            >
              {/* Image directly styled for overlap */}
              <div className="absolute top-[-40px] w-28 h-28 z-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill" // Use layout fill for responsive image
                  className="object-cover rounded-full"
                />
              </div>

              {/* Text Content */}
              <h2 className="text-lg font-semibold text-[#6b4e3d] mt-20">
                {item.name}
              </h2>
              <p className="text-sm text-[#8d6e5a] mb-2">{item.description}</p>
              <p className="text-md font-bold text-[#6b4e3d] mb-2">
                {item.price}
              </p>
              <div className="flex justify-center items-center space-x-1 text-[#F6A72D] mb-6">
                <span>⭐</span>
                <span className="text-md">{item.rating}</span>
              </div>

              {/* Order Button */}
              <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-full p-3 w-10 h-10 flex items-center justify-center">
                +
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Menu;
