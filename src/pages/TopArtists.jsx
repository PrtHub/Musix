import { useGetTracksQuery } from "../redux/services/shazamApi"
import { ArtistCard, Loading, Error } from "../components"

const TopArtists = () => {
 
  const { data, isFetching, error} = useGetTracksQuery();

  if(isFetching) return <Loading title='Loading artists...'/>
  if(error) return <Error/>

  return (
    <>
    <div className="flex flex-col">
    <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((track) => (
          <ArtistCard
            key={track.title}
            track={track}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default TopArtists