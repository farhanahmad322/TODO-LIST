import { useState } from "react";

const State = () => {
  const [value, setValue] = useState(0);

  const handleButtonClick = () => {
    setValue(value + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Counter Value: <span className="text-blue-600">{value}</span>
      </h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
        onClick={handleButtonClick}
      >
        Increment
      </button>
    </div>
  );
};

export default State;
