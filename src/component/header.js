import React from "react";
import logoImg from "../../src/imgs/AU-Bank-logo.png";
import profileIcon from "../../src/imgs/profile.png";
import dropdownImg from "../../src/imgs/arrow-down-sign-to-navigate.png";
import { useState, useRef, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-2 py-2 rounded-md"
          >
            <img
              src={profileIcon}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>John Doe</span>
            <img src={dropdownImg} className="w-[10px]" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-[2]">
              <div className="p-3 border-b border-gray-200">
                <p className="text-gray-700 font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
              <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
