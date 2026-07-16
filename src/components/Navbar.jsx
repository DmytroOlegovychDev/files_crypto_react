import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Modal from "./Modal";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const links = ["Home", "Company", "Resources", "About", "Contact"];

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = () => {
    setShowModal(true);

    setTimeout(() => {
      setIsVisible(true);
    }, 10);

    setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        setShowModal(false);
      }, 300);
    }, 2000);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1
        className="w-full text-2xl font-bold text-[#00df9a] uppercase cursor-pointer"
        onClick={handleClick}
      >
        Open trading exchange.
      </h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex cursor-pointer">
        {links.map((link) => (
          <li
            key={link}
            onClick={handleClick}
            className="
              p-4
              hover:text-green-400
              hover:scale-105
              transition-all
              duration-300
            "
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal showModal={showModal} isVisible={isVisible} />

      {/* Mobile button */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <IoMdClose size={40} /> : <MdMenuOpen size={40} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-2">OTE.</h1>

        {links.map((link) => (
          <li
            key={link}
            onClick={() => {
              handleClick();
              setNav(false);
            }}
            className="
              p-4
              border-b border-gray-600
              cursor-pointer
              hover:text-green-400
              hover:scale-105
              transition-all
              duration-300
            "
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
