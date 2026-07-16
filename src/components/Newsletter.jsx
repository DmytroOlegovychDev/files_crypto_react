import React, { useState } from "react";
import Modal from "./Modal";
const Newsletter = () => {
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
    <div className="w-full py-16 text-white px-4 cursor-default">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>

          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="
                p-3
                flex
                w-full
                rounded-md
                text-black
                outline-none
                focus:ring-2
                focus:ring-[#00df9a]
              "
              type="email"
              placeholder="Enter Email"
            />

            <button
              className="
                bg-[#00df9a]
                text-black
                border
                border-transparent
                rounded-2xl
                hover:bg-black
                hover:text-[#00df9a]
                hover:border-[#00df9a]
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                font-medium
                w-[200px]
                ml-4
                my-6
                px-6
                py-3
              "
              onClick={handleClick}
            >
              Notify Me
            </button>
          </div>

          <p>
            We care about the protection of your data. Read our{" "}
            <span
              className="
              text-[#00df9a]
              cursor-pointer
              hover:text-green-400
              transition-colors
              duration-300
            "
            >
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal showModal={showModal} isVisible={isVisible} />
    </div>
  );
};

export default Newsletter;
