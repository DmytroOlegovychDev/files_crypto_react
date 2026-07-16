import React, { useState } from "react";
import Laptop from "../assets/laptop.jpg";
import Modal from "./Modal";
const Analytics = () => {
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
    <div className="w-full bg-white py-16 px-4 cursor-default">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-xl"
          src={Laptop}
          alt="Trading analytics laptop"
        />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold uppercase">
            Unique opportunities for trade and investment
          </p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            More than 700 international markets
          </h1>

          <p className="leading-relaxed">
            On OTE you can trade on any market: cryptocurrency, stocks, indices,
            commodity markets, OTE, etc. Smart contract technology allows us to
            recreate any existing market and even create new ones. You could
            potentially even invest in water futures!
          </p>

          <button
            className="
              bg-black
              text-[#00df9a]
              border border-transparent
              w-[200px]
              rounded-2xl
              font-medium
              my-6
              mx-auto
              md:mx-0
              py-3
              hover:bg-[#00df9a]
              hover:text-black
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
            "
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>

        {/* Modal */}
        <Modal showModal={showModal} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default Analytics;
