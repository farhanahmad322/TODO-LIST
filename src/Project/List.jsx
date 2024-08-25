
import { MdCheck, MdDeleteForever } from "react-icons/md";
const List = ({data,onHandleDeleteTodo,onHandleCheckedTodo,checked}) => {
return (
  <>
  <li 
                
                className="flex items-center justify-between bg-white mb-3 p-3 border border-gray-200 rounded-lg shadow-md"
              >
                
                <span className={`${checked ? "line-through" : "no-underline"} flex-grow text-gray-800 font-medium`}>
                   {data}
                     </span>
                <div className="flex">
                  <button
                    className="mr-3 p-2 rounded-full bg-green-100 text-green-500 hover:bg-green-200 transition duration-200"
                    title="Mark as completed" onClick={()=>onHandleCheckedTodo(data)}
                  >
                    <MdCheck size={24} />
                  </button>
                  <button
                    className="p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition duration-200"
                    title="Delete task" onClick={()=>onHandleDeleteTodo(data)}
                  >
                    <MdDeleteForever size={24} />
                  </button>
                </div>
              </li>
  </>
)
}

export default List