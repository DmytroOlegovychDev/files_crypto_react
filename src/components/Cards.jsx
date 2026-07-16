import React, { useState } from "react";
import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";
import Modal from "./Modal";
export const Cards = () => {
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
    <div className="w-full py-[10rem] px-4 bg-white cursor-default">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Basic */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 transition-all duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="double"
          />

          <h2 className="text-2xl font-bold text-center py-8">Basic</h2>

          <p className="text-center text-4xl font-bold text-[#00df9a] drop-shadow-lg">
            39$
          </p>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">1 month</p>

            <p className="py-2 border-b mx-8">
              The easiest account for beginners - the spread is always fixed
            </p>

            <p className="py-2 border-b mx-8">
              Participates in the cashback program
            </p>
          </div>

          <button
            className="
              bg-[#00df9a]
              text-black
              border border-transparent
              w-[200px]
              rounded-2xl
              hover:bg-black
              hover:text-[#00df9a]
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              font-medium
              my-6
              mx-auto
              px-6
              py-3
            "
            onClick={handleClick}
          >
            Start Trial
          </button>
        </div>

        {/* Standard */}
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 transition-all duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="single"
          />

          <h2 className="text-2xl font-bold text-center py-8">Standard</h2>

          <p className="text-center text-5xl font-bold drop-shadow-lg text-[#00df9a]">
            69$
          </p>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">1 month</p>

            <p className="py-2 border-b mx-8">
              Highest execution speed and lowest spreads
            </p>

            <p className="py-2 border-b mx-8">
              Executing orders with a prime broker
            </p>
          </div>

          <button
            className="
              bg-black
              text-[#00df9a]
              border border-transparent
              hover:bg-[#00df9a]
              hover:text-black
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              w-[200px]
              rounded-2xl
              font-medium
              my-6
              mx-auto
              px-6
              py-3
            "
            onClick={handleClick}
          >
            Start Trial
          </button>
        </div>

        {/* Professional */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 transition-all duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="triple"
          />

          <h2 className="text-2xl font-bold text-center py-8">Professional</h2>

          <p className="text-center text-4xl font-bold text-[#00df9a] drop-shadow-lg">
            99$
          </p>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">1.5 month</p>

            <p className="py-2 border-b mx-8">
              Account denominated in Bitcoin (MBT)
            </p>

            <p className="py-2 border-b mx-8">
              The account balance increases with the rise in Bitcoin exchange
              rate
            </p>
          </div>

          <button
            className="
              bg-[#00df9a]
              text-black
              border border-transparent
              w-[200px]
              hover:bg-black
              hover:text-[#00df9a]
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              rounded-2xl
              font-medium
              my-6
              mx-auto
              px-6
              py-3
            "
            onClick={handleClick}
          >
            Start Trial
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal showModal={showModal} isVisible={isVisible} />
    </div>
  );
};
