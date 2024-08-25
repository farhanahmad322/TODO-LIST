

export const Eventhandling = () => {
  const handleButtonClick = () => {
    alert('Button clicked');
  };

  const handleWelcome = (user) => {
    console.log(`Hey Welcome ${user}`);
  };

  return (
    <div className="mt-4 flex space-x-4 justify-center items-center h-screen">
      <button 
        onClick={handleButtonClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Click me
      </button>

      <button 
        onClick={(event) => handleButtonClick(event)} 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
      >
        Click me2
      </button>

      <button 
        onClick={() => alert('Hey, I’m inside wala hun')} 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
      >
        Click me3
      </button>

      <button 
        onClick={() => handleWelcome('Farhan')} 
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-200"
      >
        Click me4
      </button>
    </div>
  );
};
