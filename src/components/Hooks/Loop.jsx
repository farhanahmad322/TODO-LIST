import { useState } from "react";

const Loop = () => {
  const [users, setUser] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 24 },
    { name: "Ahmad", age: 54 },
    { name: "Farry", age: 94 },
  ]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100">
      <div className="max-w-lg p-4  bg-blue-500 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          User List
        </h1>
        <ul className="space-y-3">
          {users.map((currElm, index) => {
            return (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-lg"
              >
                <span className=" text-lg font-medium text-gray-700">
                  {currElm.name}
                </span>
                <span className="px-5 text-sm text-gray-600">
                  {currElm.age} years old
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Loop;
