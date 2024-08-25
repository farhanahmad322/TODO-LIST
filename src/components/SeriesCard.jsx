export const SeriesCard = ({ data }) => {
  const { poster_path, title, overview, vote_average, release_date, url } = data;

  return (
    <li className="relative bg-black rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
      <img 
        src={poster_path} 
        alt={title} 
        className="rounded-t-lg w-60 h-60 object-cover mx-auto mt-4" 
      />
      <div className="p-4 text-white flex flex-col flex-grow">
        <h1 className="font-bold text-lg truncate">{title.slice(0, 20)}</h1>
        <p className="text-sm mt-2 line-clamp-3">{overview.slice(0, 70)}...</p>
        <div className="flex items-center justify-between mt-4 text-sm">
          <span className={`px-2 py-1 rounded-lg ${vote_average > 8.7 ? 'bg-green-600' : 'bg-yellow-600'}`}>
            {vote_average.toFixed(1)}
          </span>
          <span>{release_date}</span>
        </div>
        <div className="mt-auto">
          <a href={url} target="_blank" rel="noopener noreferrer" className="block mt-4">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition duration-200">Watch Now</button>
          </a>
        </div>
      </div>
    </li>
  );
};
