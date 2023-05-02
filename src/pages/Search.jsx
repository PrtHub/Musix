import { useGetSearchQuery } from "../redux/services/shazamApi"
import { useParams } from "react-router-dom"
import { Error, Loading, SongCard } from "../components"
import { useSelector } from "react-redux"


const Search = () => {
   const { searchTerm } = useParams();
   const { activeSong, isPlaying } = useSelector((state) => state.player);
   const { data, isFetching, error } = useGetSearchQuery(searchTerm);

   const songs = data?.tracks.hits.map((song) => song.track);

   if(isFetching) return <Loading title="Loading search result..."/>
   if(error) return <Error/>

  return (
    <>
    <div className="flex flex-col">
    <h2 className="font-bold text-xl text-white text-left mb-5">
       Search results for <span className="from-neutral-100">"{searchTerm}"</span>
     </h2>
     <div className="flex flex-wrap sm:justify-start justify-center gap-6">
        {songs.map((song, i) => (
             <SongCard
             key={song.key}
             song={song}
             isPlaying={isPlaying}
             activeSong={activeSong}
             data={data}
             i={i}
           />
        ))}
     </div>
    </div>
    </>
  )
}

export default Search