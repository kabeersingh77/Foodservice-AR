const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 md:px-12 bg-transparent text-gray-800">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif tracking-widest text-white drop-shadow-lg">FOOD EAT</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item.name} href="#" className="uppercase text-white hover:text-orange-400 transition duration-300 relative group">
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </a>
          ))}
          <div className="w-6 h-6 ml-4 text-white hover:text-orange-400 transition cursor-pointer">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <Icon path={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-4 p-4 rounded-xl bg-white shadow-lg space-y-2">
          {navItems.map((item) => (
            <a key={item.name} href="#" className="block py-2 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-200">
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;