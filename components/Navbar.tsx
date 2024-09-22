import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-brown-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Coffee<span className="text-yellow-500">Shop</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-500">Home</a>
            </li>
            <li>
              <a href="/Menu" className="hover:text-yellow-500">Menu</a>
            </li>
            <li>
              <a href="/About" className="hover:text-yellow-500">About Us</a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-yellow-500">Contact</a>
            </li>
          </ul>

          {/* Cart Icon */}
          <div className="ml-6">
            <a href="/cart" className="relative hover:text-yellow-500">
              <FaShoppingCart size={24} />
              {/* Optionally, add a cart item count indicator */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
