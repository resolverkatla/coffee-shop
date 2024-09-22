import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons

export default function FavoriteProducts() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7] -mt-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#6b4e3d] mb-8 text-center">Favorite Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <Image
              src={"/menu_pics/nitro.jpg"} // Path to the first product image
              alt="Product 1"
              width={400}
              height={300}
              className="w-full h-60 object-cover" // Adjusted height for a taller card
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-[#6b4e3d]">Caramel Iced Latte</h3>
              <p className="text-[#8d6e5a]">Smooth caramel blended with the finest espresso.</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <span className="ml-2 text-sm text-gray-600">(5.0)</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <Image
              src={"/menu_pics/iced-mocha.jpg"} // Path to the second product image
              alt="Product 2"
              width={400}
              height={300}
              className="w-full h-60 object-cover" // Adjusted height for a taller card
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-[#6b4e3d]">Vanilla Cold Brew</h3>
              <p className="text-[#8d6e5a]">Light and refreshing with a hint of vanilla.</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(4.0)</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <Image
              src={"/menu_pics/iced-macchiato.jpg"} // Path to the third product image
              alt="Product 3"
              width={400}
              height={300}
              className="w-full h-60 object-cover" // Adjusted height for a taller card
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-[#6b4e3d]">Mocha Frappuccino</h3>
              <p className="text-[#8d6e5a]">A rich chocolate experience with a coffee kick.</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-gray-300" />
                <span className="ml-2 text-sm text-gray-600">(4.0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
