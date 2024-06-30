import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Nav2() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      title: "Collectibles and arts",
      items: ["Collectibles", "Antiques", "Sports Memorabilia", "Art"],
    },
    {
      title: "Electronics",
      items: ["Computer and tablets", "Cameras and photos", "TV, audio and surveillance", "Cell phones and accessories"],
    },
    {
      title: "Fashion",
      items: ["Men", "Women", "Jewelry and watches", "Shoes"],
    },
    {
      title: "Home and Garden",
      items: ["Yard, garden and outdoor", "Craft", "Home improvements", "Pet supplies"],
    },
    {
      title: "Auto Parts and Accessories",
      items: ["GPS and security devices", "Radar and Laser Detectors", "Car care and detailing", "Scooter parts and accessories"],
    },
    {
      title: "Musical Instruments and Gear",
      items: ["Guitars", "Pro audio equipment", "Strings", "Stage lighting and effects"],
    },
  ];

  return (
    <div className="relative flex items-center justify-between w-full py-4 max-sm:py-1 bg-white text-gray-800 ">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 max-md:h-6 mr-6 max-md:mr-1" />
      </div>

      <div className="w-[85%] flex items-center space-x-4 max-md:space-x-1">
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <p className="text-md max-md:hidden">Shop by category</p>
            <MdKeyboardArrowDown className="text-xl ml-1" />
          </div>
          {isOpen && (
            <div className="absolute top-12 left-0 bg-white z-10 w-96 max-h-[80vh] p-4 flex-wrap shadow-lg overflow-y-auto">
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index}>
                    <p className="font-bold mb-2 cursor-pointer">{category.title}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {category.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full items-center bg-white rounded ">
          <div className="flex items-center border border-gray-300 flex-grow p-1 px-3 max-md:px-1">
            <CiSearch className="text-xl text-gray-500" />
            <input 
              type="text" 
              placeholder="Search for anything" 
              className="flex-grow px-2 max-md:px-0 py-1 outline-none max-sm:w-[50%]"
            />
          </div>
          <button className="px-6 max-md:px-1 py-2 bg-blue-500 text-white rounded-r">Search</button>
        </div>

        <Link to={"/advance"}>
        <div className="text-sm cursor-pointer">
          Advanced
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav2;
