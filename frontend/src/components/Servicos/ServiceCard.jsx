import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor, imageName } = item;

  return (
    <div className="py-6 px-4 lg:px-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl leading-9 text-headingColor font-bold border-b-2 border-gray-200 pb-2 text-center">
        {name}
      </h2>
      <p className="text-base leading-7 font-medium text-gray-700 mt-4">
        {desc}
      </p>

      {imageName && (
        <img src={imageName} alt={name} className="mt-4 rounded-lg shadow-sm border border-gray-200" />
      )}

      <div className="flex items-center justify-between mt-6">
        <Link to='/cuidadores' className="w-11 h-11 rounded-full border border-solid border-gray-800 flex items-center justify-center group hover:bg-orange-400 hover:border-none transition-all duration-300 ease-in-out">
          <BsArrowRight className="text-gray-800 group-hover:text-white w-6 h-6" />
        </Link>
        <span className="w-11 h-11 flex items-center justify-center text-lg font-semibold"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}>
          {index + 1}
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;
