// components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="bg-brown-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            Coffee<span className="text-yellow-500">Shop</span>
          </div>
          <div>
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
          </div>
        </div>
      </nav>
    );
  }
  