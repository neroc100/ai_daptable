import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold hover:text-blue-300 transition-colors">
              My App
            </Link>
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className="hover:text-blue-300 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="hover:text-blue-300 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-blue-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header; 