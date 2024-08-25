import  SeriesData from "./../Api/SeriesData.json"
import { SeriesCard } from "./SeriesCard";
 const Netflix = () => {
   
     
    
  
     return (
      <div className="container mx-auto my-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {SeriesData.map((data) => (
        <SeriesCard key={data.id} data={data} />
      ))}
    </ul>
    </div>
      
    );
  };

  export default Netflix
  
  

