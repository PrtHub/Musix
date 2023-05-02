import { useGetSongDetailsQuery } from "../redux/services/shazamApi"
import { useParams } from "react-router-dom"
import { Loading, Error } from "../components"

const SongDetails = () => {
  const { songid } = useParams();
  const { data, isFetching, error} = useGetSongDetailsQuery(songid)
 
  if (isFetching ) return <Loading title="Searching song deatils..." />;
  if (error) return <Error />;

  return (
    <>
    <div className="flex flex-col mt-5">
    <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

    <div className="mt-5">
          {data?.sections[1].type === "LYRICS" ? (
            data?.sections[1].text.map((line, i) => (
              <p key={line + i} className="text-white text-lg my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-300 text-base my-6">
              Sorry, No Lyrics Found
            </p>
          )}
        </div>     
      </div>
    </>
  )
}

export default SongDetails