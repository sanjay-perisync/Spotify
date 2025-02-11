import { useEffect, useState } from "react";

const RightSection = () => {
    const [artists, setArtists] = useState([]);
    const [music, setMusic] = useState({ popularAlbums: [], popularSingles: [] });
    const [showAllArtists, setShowAllArtists] = useState(false);
    const [showAllMusic, setShowAllMusic] = useState(false);

    useEffect(() => {
        Promise.all([
            fetch("/PopularArtist.json").then((res) => res.json()),
            fetch("/PopularAlbums.json").then((res) => res.json())
        ])
        .then(([artistData, albumData]) => {
            setArtists(artistData?.artists || []);
            setMusic(albumData || { popularAlbums: [], popularSingles: [] });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const displayedArtists = showAllArtists ? artists : artists.slice(0, 6);
    const displayedMusic = showAllMusic ? [...music.popularAlbums, ...music.popularSingles] : [...music.popularAlbums, ...music.popularSingles].slice(0, 6);

    return (
        <div className="p-4 mt-4 mr-3 rounded-lg bg-customBgBlack text-white min-h-screen flex flex-col gap-12 w-full">
            
            {/* Popular Artists Section */}
            <div className="">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4">Popular Artists</h2>
                <button 
                    className="underline font-semibold text-[16px]"
                    onClick={() => setShowAllArtists(!showAllArtists)}
                >
                    {showAllArtists ? "Show Less" : "Show All"}
                </button>
            </div>
            
            {artists.length > 0 && (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
    {displayedArtists.map((artist) => (
      <div key={artist.name} className="flex flex-col">
        <img src={artist.image} alt={artist.name} className="w-32 h-32 object-cover rounded-full" />
        <p className="mt-2 text-[18px] font-semibold">{artist.name}</p>
        <p className="text-[18px] text-gray-400">Artist</p>
      </div>
    ))}
  </div>
)}

            </div>

            {/* Popular Albums & Singles Section */}

           {/* Popular Albums & Singles Section */}
<div>
    <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Popular Albums & Singles</h2>
        <button 
            className="underline font-semibold text-[16px]"
            onClick={() => setShowAllMusic(!showAllMusic)}
        >
            {showAllMusic ? "Show Less" : "Show All"}
        </button>
    </div>

    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-5">
    {displayedMusic.length > 0 && (
  displayedMusic.map((item) => (
    <div key={item.title} className="flex flex-col">
      <img src={item.image} alt={item.title} className="w-44 h-48 rounded-lg" />
      <p className="mt-2 text-[18px] font-semibold">{item.title}</p>
      <p className="text-[18px] text-gray-400 ">{item.artist || "Album"}</p>
    </div>
  ))
)}

    </div>
</div>

        </div>
    );
};

export default RightSection;
