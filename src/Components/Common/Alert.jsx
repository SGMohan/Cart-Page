// Alert.jsx
import React from "react";

const Alert = ({ message, type = "info" }) => {
  const alertStyles = {
    info: "bg-blue-100 border-l-4 border-blue-500 text-blue-700",
    warning: "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700",
    error: "bg-red-100 border-l-4 border-red-500 text-red-700",
    success: "bg-green-100 border-l-4 border-green-500 text-green-700",
  };

  return (
    <div
      className={`fixed top-4 left-4/5 transform -translate-x-1/6 p-3 sm:p-4 rounded-lg shadow-lg ${alertStyles[type]} z-50 text-sm sm:text-md`}
    >
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Alert;
