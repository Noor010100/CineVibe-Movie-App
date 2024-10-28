import React from 'react';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <select 
        defaultValue="0" 
        onChange={func} 
        name="format" 
        id="format"
        className="block w-full bg-gray-200 border border-gray-300 rounded-lg p-2 text-gray-700 text-sm md:text-base focus:outline-none focus:ring focus:ring-[#6556CD] appearance-none"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
     
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <i className="ri-arrow-down-s-fill text-gray-600"></i>
      </div>
    </div>
  );
};

export default Dropdown;
