// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-brown-900 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CoffeeShop. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-yellow-500 ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  }
  