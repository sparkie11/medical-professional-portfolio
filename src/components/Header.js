import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700">
          Dr. Jefferson George
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900">
              Experience
            </Link>
            <Link href="#accolades" className="text-gray-600 hover:text-gray-900">
              Accolades
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;