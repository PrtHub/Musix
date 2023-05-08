/* eslint-disable no-unused-vars */
import { SongCard, Error, Loading } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTracksQuery } from '../redux/services/shazamApi'


const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying} = useSelector((state) => state.player);
  const { data, isFetching, error} = useGetTracksQuery(); 

  if(isFetching) return <Loading title="Loading Trending Songs..."/>
  if(error) return <Error/>

  return (
    <div className='flex flex-col mt-3'>
       <h2 className="font-bold text-xl text-white text-left mb-5">
          Trending
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

export default Discover