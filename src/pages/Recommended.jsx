import { useSelector } from 'react-redux'
import { useGetRecomandedQuery } from '../redux/services/shazamApi'
import { Error, Loading, SongCard } from '../components'


const Recommended = () => {
   const {activeSong, isPlaying} = useSelector((state) => state.player);

   const {data, isFetching, error} = useGetRecomandedQuery();

   if(isFetching) return <Loading title="Loading other songs"/>
   if(error) return <Error/>

  return (
    <div className='flex flex-col mt-3'>
    <h2 className="font-bold text-xl text-white text-left mb-5">
       All Other Songs
     </h2>
     <div className='flex flex-wrap sm:justify-start justify-center gap-6'>
      {data?.tracks?.map((song, i) => (
       <SongCard
       key={song.key}
       song={song}
       i={i}
       isPlaying={isPlaying}
       activeSong={activeSong}
       data={data}
       />
      ))}
     </div>
 </div>
  )
}

export default Recommended