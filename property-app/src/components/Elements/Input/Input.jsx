import React from "react";


const Input = (props) => {
  const {type, placeholder, name} = props;
  return (
    <input
      type={type}
      id="inputJudul"
      className="text-gray-700 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
