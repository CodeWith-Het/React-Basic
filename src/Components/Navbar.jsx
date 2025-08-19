import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import { gsap } from 'gsap';
import LOGO from './Food-Logo.jpg';

const Navbar = () => {
  const navbarRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Navbar slide-in animation
    gsap.fromTo(
      navbarRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Links stagger animation
    gsap.fromTo(
      linksRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.1, delay: 0.5 }
    );
  }, []);

  return (
    <div
      ref={navbarRef}
      className="text-white flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-600 to-orange-500 shadow-lg"
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <img src={LOGO} alt="logo" className="h-12" />
        <p className="text-lg font-semibold">CHAPACHAT KHANA</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {["Home", "About", "Foods", "Order"].map((item, index) => (
          <li
            key={index}
            ref={(el) => (linksRef.current[index] = el)}
            className="cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
          >
            {item}
          </li>
        ))}
      </ul>     

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign UP
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Log IN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
