import Image from 'next/image'; // Import Image component from Next.js for optimization

function Menu() {
  const menuItems = [
    {
      name: "Iced Latte",
      description: "Chilled espresso with milk and ice.",
      price: "₱150",
      image: "/images/iced-latte.png",
    },
    {
      name: "Cappuccino",
      description: "Rich espresso with steamed milk foam.",
      price: "₱130",
      image: "/images/cappuccino.png",
    },
    {
      name: "Espresso",
      description: "Strong and bold espresso shot.",
      price: "₱110",
      image: "/images/espresso.png",
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk.",
      price: "₱170",
      image: "/images/mocha.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7]">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#6b4e3d]">Our Menu</h1>
          <p className="text-lg text-[#8d6e5a] mt-4">
            Enjoy a variety of coffee brewed to perfection.
          </p>
        </div>

        {/* Menu Items Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="rounded-lg object-cover"
                width={200}
                height={200}
                priority={true}
              />
              <h2 className="text-2xl font-semibold text-[#6b4e3d]">
                {item.name}
              </h2>
              <p className="text-md text-[#8d6e5a]">{item.description}</p>
              <p className="text-lg font-bold text-[#6b4e3d]">{item.price}</p>
              <button className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white font-semibold py-2 px-4 rounded-lg">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Menu;
