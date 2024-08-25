import { useEffect,useState } from "react";


const TodoDate = () => {
    const [dateTime, setDateTime] = useState("");
    useEffect(()=>{
        const interval=setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`);
      }, 1000);
  
      return ()=> clearInterval(interval)
    
  
     },[])
  return <h1 className="text-lg font-semibold text-gray-600 italic">{dateTime}</h1>
}

export default TodoDate 