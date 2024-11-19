import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } bg-customGray-background bg-opacity-80 backdrop-blur-md py-1 fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out`}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16">

        <div className="block">
          <img src="/logo.png" alt="Company Logo" width={60} height={60} />
        </div>

        <ul
          className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-12 font-montserrat font-bold ${
            isMenuOpen ? 'block' : 'hidden sm:flex'
          }`}
        >
          <li className="bg-white text-myGreen rounded-md shadow-xl py-3 px-7">Home</li>
          <li className="hover:text-myGreen transition duration-200 transform ease-in-out">About</li>
          <li className="hover:text-myGreen transition duration-200 transform ease-in-out">Localities</li>
          <li className="hover:text-myGreen transition duration-200 transform ease-in-out">Developers</li>
        </ul>


        <div className="sm:hidden relative">
          <div
            className="bg-white rounded-full shadow-xl p-3"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <span className="text-myGreen text-xl">&times;</span>
            ) : (
              <img src="/menu.svg" alt="menu icon" width="25px" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
