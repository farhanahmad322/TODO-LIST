// import { useState } from "react";

// const DraivedState = () => {
//   const [users, setUser] = useState([
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 24 },
//     { name: "Ahmad", age: 54 },
//     { name: "Farry", age: 94 },
//   ]);

//   const userCount = users.length;
//   const averageAge = users.reduce((accum, currElm) => accum + currElm.age, 0) / userCount;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
//           User List
//         </h1>
//         <ul className="space-y-4">
//           {users.map((currElm, index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow-md"
//             >
//               <span className="text-lg font-semibold text-gray-800">
//                 {currElm.name}
//               </span>
//               <span className="text-sm text-gray-600">
//                 {currElm.age} years old
//               </span>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-6 flex justify-center">
//           <div className="p-4 bg-red-50 border border-red-200 rounded-lg shadow-lg">
//             <span className="text-xl font-semibold text-red-700">
//               Average Age: <span className="text-2xl font-bold">{averageAge.toFixed(2)}</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DraivedState;
