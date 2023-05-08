/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';
import cover  from '../assets/cover-art.jpg'

const SongCard = ({ song, isPlaying, activeSong, data, i}) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-52 h-[16rem] p-3 bg-white/10 bg-opacity-20 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="Coverart" src={song.images?.coverart ? song.images?.coverart :  cover } className="rounded-lg h-full w-full" />
      </div>

      <div className="mt-[4px] flex flex-col">
        <p className="font-bold text-lg text-[#FFFFFF] truncate">
          <Link to={`/song-details/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-xs truncate text-gray-200 font-medium mt-1">
          <div>
            {song.subtitle}
          </div>
        </p>
      </div>
      
    </div>
  )
}

export default SongCard;