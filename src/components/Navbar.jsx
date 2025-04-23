import { Menu, Search, User, LogIn, Bug } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-[48px] bg-gray-100">
      {/* Navbar with black gradient */}
      <nav className="bg-gradient-to-r from-black via-gray-800 to-black border-hidden border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center justify-start">
              <div className="flex-shrink-0">
                <Bug className="h-6 w-8 text-yellow-800 " />
              </div>
              <Link to="/#Home">
                <div className="ml-2 hidden md:block">
                  <span
                    className="text-xs text-yellow-800"
                    style={{
                      fontFamily: "'Special Gothic Expanded One', sans-serif",
                    }}
                  >
                    Cicada
                  </span>
                  <span
                    className="text-xs text-white"
                    style={{
                      fontFamily: "'Special Gothic Expanded One', sans-serif",
                    }}
                  >
                    {" "}
                    3301
                  </span>
                </div>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <a
                    href="#Home"
                    className="text-gray-300 hover:text-yellow-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#Features"
                    className="text-gray-300 hover:text-yellow-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#Deals"
                    className="text-gray-300 hover:text-yellow-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Deals
                  </a>
                  <a
                    href="#Contact"
                    className="text-gray-300 hover:text-yellow-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                class="shadow-lg appearance-none border-1 border-transparent rounded-full w-full py-1 px-2 text-gray-300 bg-black placeholder-gray-600 focus:outline-none focus:border-yellow-800 focus:ring-1 focus:ring-yellow-900"
                type="text"
                placeholder="Search"
              />
            </div>
            {/* Right side - Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/register">
                <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <User className="h-5 w-5" />
                </button>
              </Link>
              <Link to="/login">
                <button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <LogIn className="h-5 w-5" />
                </button>
              </Link>
              <button className="md:hidden text-gray-300 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
