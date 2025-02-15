import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <nav className="p-4 text-white bg-purple-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li className="hover:text-gray-500 cursor-pointer">
            Products <i className="fas fa-chevron-down"></i>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-500 cursor-pointer">Community</li>
        </ul>

        {/* Logo */}
        <p className="text-lg font-bold">Startup</p>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <Button variant="flat" className="text-white hover:text-gray-300">
            Login
          </Button>
          <Button variant="bordered" className="text-white border-white hover:bg-white hover:text-purple-900">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <label htmlFor="menu-toggle" className="md:hidden text-white text-lg font-bold cursor-pointer">
          ☰
        </label>
      </div>

      {/* Hidden Checkbox for Toggle */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      {/* Mobile Menu */}
      <div className="hidden peer-checked:flex md:hidden flex-col items-center mt-4 space-y-3">
        <ul className="flex flex-col items-center gap-2 text-sm">
          <li className="hover:text-gray-500 cursor-pointer">
            Products <i className="fas fa-chevron-down"></i>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-500 cursor-pointer">Community</li>
        </ul>
        <div className="flex flex-col gap-2 mt-3">
          <Button variant="ghost" className="text-white hover:text-gray-300">
            Login
          </Button>
          <Button variant="bordered" className="text-white border-white hover:bg-white hover:text-purple-900">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
