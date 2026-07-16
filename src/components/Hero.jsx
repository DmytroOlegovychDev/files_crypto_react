import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Modal from "./Modal";
const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
    <div className="text-white cursor-default">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] uppercase font-bold p-2 text-1xl">
          Start investing with just $5
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py:6">
          Trade from anywhere in the world with OTE.
        </h1>
        <div className="flex items-center justify-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
            strings={["BTC", "ETH", "XRP", "SOL", "NOT", "SEI"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-1xl  text-gray-500">
          Monitor your data analytics to increase revenue for BTC, ETH, SOL,
          ADA, NOT , SEI & XRP.
        </p>
        <button
          className="bg-[#00df9a] w-[200px] rounded-2xl font-medium my-6 mx-auto py-3 text-black hover:bg-black hover:text-[#00df9a] hover:scale-105 active:scale-95 transition-all duration-300"
          onClick={handleClick}
        >
          Get Started
        </button>

        {/* modal window */}
        <Modal showModal={showModal} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Hero;
