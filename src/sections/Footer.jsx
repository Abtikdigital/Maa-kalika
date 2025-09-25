import { useState, useEffect } from "react";
import Logo from "../assets/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faPinterest,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLeaf,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Adjust for navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#24231D] text-white px-6 py-10 md:px-20 md:py-16 lg:px-30 lg:py-16 flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-16">
      {/* Logo & Social */}
      <div className="flex flex-col gap-4">
        <img src={Logo} className="h-16 w-40" />
        <p className="text-[#A5A49A] text-sm max-w-xs">
          There are many variations of passages of lorem ipsum available, but
          the majority suffered.
        </p>
        <div className="flex gap-3 mt-2">
          {[faTwitter, faFacebook, faPinterest, faInstagram].map((icon, i) => (
            <a
              key={i}
              className="bg-[#1F1E17] p-2.5 cursor-pointer rounded-full flex justify-center items-center hover:bg-[#4BAF47] transition-colors"
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-white"
                fontSize={20}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className="flex flex-col gap-3">
        <h2 className="font-1 font-bold text-white text-lg">Explore</h2>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-12 h-1 rounded-lg bg-[#4BAF47]"></div>
          <div className="w-1 h-1 rounded-full bg-[#4BAF47]"></div>
        </div>
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-[#A5A49A] cursor-pointer flex items-center text-sm gap-2 w-fit  relative group"
            >
              <FontAwesomeIcon icon={faLeaf} className="text-[#EEC044]" />
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative cursor-pointer"
              >
                {item.name}
                {/* Hover Filler Line */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4BAF47] transition-all duration-300 rounded-lg group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-3">
        <h2 className="font-1 font-bold text-white text-lg">Contact</h2>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-12 h-1 rounded-lg bg-[#4BAF47]"></div>
          <div className="w-1 h-1 rounded-full bg-[#4BAF47]"></div>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 text-[#A5A49A] group cursor-pointer text-sm">
            <FontAwesomeIcon icon={faPhone} className="text-[#EEC044]" />
            <span className="group-hover:underline">+91 7822 81 5169</span>
          </li>
          <li className="flex items-center gap-2 text-[#A5A49A] group cursor-pointer text-sm">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#EEC044]" />
            <span className="group-hover:underline">phrishikesh172@gmail.com</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer text-[#A5A49A] group text-sm">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#EEC044]"
            />
            <span className="group-hover:underline">
              80 Brooklyn Golden Street, New York, USA
            </span>
          </li>
          <li className="relative w-full max-w-xs mt-2">
            <input
              className="bg-[#F8F7F0] text-[#878680] pl-4 pr-12 py-2.5 w-full rounded-xl font-semibold h-12 focus:outline-none focus:ring-2 focus:ring-[#4BAF47]"
              placeholder="Your Email Address"
            />
            <button className="bg-[#4BAF47] w-11 h-12 rounded-r-xl flex justify-center items-center absolute top-0 right-0 hover:bg-[#3a9e3c] cursor-pointer transition-colors">
              <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
