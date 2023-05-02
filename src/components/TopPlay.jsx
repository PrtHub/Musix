
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetRecomandedQuery } from "../redux/services/shazamApi";

const TopCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handleClickPause,
  handleClickPlay,
}) => (
  <div className="w-full flex flex-row items-center hover:bg-[#ADD8E6] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="text-white font-semibold text-base mr-1">{i + 1}.</h3>
    <div className="flex flex-1 flex-row items-center justify-start">
      <img
        src={song?.images?.coverart}
        alt="coverart"
        className="w-16 h-16 rounded-lg"
      />
      <div className="flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-white font-bold text-sm ">{song.title}</p>
        </Link>
        <Link to={`/artist-top-tracks/${song?.artists[0]?.adamid}`}>
          <p className="text-gray-200 font-medium text-xs mt-1">{song.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      key={song.key}
      song={song}
      i={i}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handleClickPause={handleClickPause}
      handleClickPlay={handleClickPlay}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetRecomandedQuery();
  // console.log(data);
  const topPlays = data?.tracks?.slice(0, 10);

  const handleClickPause = () => {
    dispatch(playPause(false));
  };

  const handleClickPlay = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col mt-4">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between mr-1">
          <h2 className="font-bold text-white text-xl">Other</h2>
          <Link to="/recommended">
            <p className="text-gray-200 cursor-pointer text-sm ">See more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handleClickPause={handleClickPause}
              handleClickPlay={() => handleClickPlay(song, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
