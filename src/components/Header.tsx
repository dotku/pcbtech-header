import React from "react";
import { CircuitBoard, Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <CircuitBoard className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              PCBTech
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Capabilities
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full hover:bg-gray-100">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Quote
              </button>
            </div>
          </div>

          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
