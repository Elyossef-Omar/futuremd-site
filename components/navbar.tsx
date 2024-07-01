import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="">
      <nav className="flex items-center justify-center">
        <a href="/">
          <img src="logo.png" alt="Logo" className="h-[50px] mr-9 logo"/>
        </a>
        <a href="#" className="text-gray-100 mr-7 hover:text-[#5C9CFF] font-bold transition delay-50">About</a>
        <a href="#" className="text-gray-100 mr-7 hover:text-[#5C9CFF] font-bold transition delay-50">Sponsors</a>
        <a href="#" className="text-gray-100 mr-7 hover:text-[#5C9CFF] font-bold transition delay-50">Schedule</a>
        <a href="#" className="text-gray-100 mr-7 hover:text-[#5C9CFF] font-bold transition delay-50">Media</a>
        <a href="#" className="text-gray-100 mr-7 hover:text-[#5C9CFF] font-bold transition delay-50">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
