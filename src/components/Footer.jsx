import React, { useState } from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Modal from "./Modal";
const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const footerLinks = [
    {
      title: "Solutions",
      links: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      title: "Support",
      links: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Jobs", "Press", "Careers"],
    },
    {
      title: "Legal",
      links: ["Claim", "Policy", "Terms"],
    },
  ];

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
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 cursor-default">
      {/* Left section */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          {" "}
          Crypto OTE.
        </h1>

        <p className="py-4">
          A modern trading platform designed to give you access to global
          markets, advanced tools, and new investment opportunities.
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            size={30}
            className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300"
          />

          <FaInstagram
            size={30}
            className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300"
          />

          <FaTwitterSquare
            size={30}
            className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300"
          />

          <FaGithubSquare
            size={30}
            className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300"
          />

          <FaDribbbleSquare
            size={30}
            className="cursor-pointer hover:text-green-400 hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>

      {/* Footer links */}
      <div className="lg:col-span-2 flex justify-between mt-6">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h6 className="font-medium text-gray-400">{section.title}</h6>

            <ul>
              {section.links.map((link) => (
                <li
                  key={link}
                  onClick={handleClick}
                  className="
                    py-2
                    text-sm
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
        ))}
      </div>

      {/* modal window */}
      <Modal showModal={showModal} isVisible={isVisible} />
    </div>
  );
};

export default Footer;
