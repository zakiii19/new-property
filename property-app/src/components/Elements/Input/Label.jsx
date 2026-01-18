import React from "react";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-gray-500 text-xs font-bold mb-1">
      {children}
    </label>
  );
};

export default Label;
