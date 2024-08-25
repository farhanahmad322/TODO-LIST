import { useState } from "react";


const Form = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({ id: "", content: "", checked: false });
    
    const handleInputChange = (value) => {
        setInputValue({id:value,content:value,checked:false});
      };

      const handleFormSubmit=(event)=>{
          event.preventDefault()
        onAddTodo(inputValue)
        setInputValue({id:"",content:"",checked:false});

      }
  return (
    <>
        <section className="form w-full max-w-lg bg-white shadow-md rounded-lg p-5">
          <form
            className="flex items-center border-b-2 border-blue-400 pb-4 mb-4"
            onSubmit={handleFormSubmit}
          >
            <div className="flex-grow">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your task..."
                value={inputValue.content}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <div className="ml-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 duration-200"
              >
                Add Task
              </button>
            </div>
          </form>
        </section>
    </>
  )
}

export default Form