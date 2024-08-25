import { useState } from "react";

function LiftStateUp() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600">
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
}

export default LiftStateUp;

export const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter anything..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400"
      />
    </div>
  );
};

export const DisplayComponent = ({ inputValue }) => {
  return (
    <p className="text-xl font-semibold text-gray-700">
      The current input value is: <span  className="text-red-500 text-3xl font-bold">{inputValue}</span>
    </p>
  );
};
