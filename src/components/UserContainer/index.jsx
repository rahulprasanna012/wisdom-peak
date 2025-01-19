import React from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { PiCityDuotone } from 'react-icons/pi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { useWisdomContext } from '../../context/UseWisdomContext';

const UserContainer = ({ text, count, iconText }) => {
  const { theme } = useWisdomContext();

  // Icons mapping
  const icons = {
    users: <FaRegUser size={35} />,
    city: <MdOutlineHomeWork size={35} />,
    company: <PiCityDuotone size={35} />,
  };

  // Determine background class
  const bgClass = theme === 'purpul' ? 'bg-purpul text-white' : 'bg-blue text-white';

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center p-5 ${
        text === 'Users' ? bgClass : 'bg-white'
      } rounded-lg shadow-lg mb-6 w-full sm:w-72 h-auto sm:h-36`}
    >
      <div className="text-4xl">{icons[iconText]}</div>
      <div className="ml-0 sm:ml-7 mt-3 sm:mt-0 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold">{count}</h1>
        <p className="text-sm sm:text-md">Total {text}</p>
      </div>
    </div>
  );
};

export default UserContainer;
