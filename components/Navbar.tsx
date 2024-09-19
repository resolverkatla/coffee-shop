import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link href="/">
        Coffee Shop
      </Link>
      <ul className="flex">
        <li className="mr-4">
          <Link href="/About">
            About
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/Menu">
            Menu
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;