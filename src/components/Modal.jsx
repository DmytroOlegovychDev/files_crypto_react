import React from "react";

const Modal = ({ showModal, isVisible }) => {
  if (!showModal) return null;

  return (
    <div
      className={`
        fixed top-20 right-5 z-50
        border border-red-500
        shadow-red-500/30
        rounded-lg
        bg-neutral-900
        px-6 py-4
        text-white
        shadow-xl
        transition-all
        duration-300
        ease-in-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
      `}
    >
      <p className="font-medium text-green-300">Oops...</p>

      <p className="text-sm text-green-300">
        This section is currently unavailable :\
      </p>
    </div>
  );
};

export default Modal;
