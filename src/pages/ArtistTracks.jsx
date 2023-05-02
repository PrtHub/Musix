import { useGetArtistTracksQuery } from "../redux/services/shazamApi"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Error, Loading, SongCard } from "../components"


const ArtistTracks = () => {
    const { artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetArtistTracksQuery(artistId);
    console.log(data)

    if(isFetching) return <Loading title="Loading artist details.."/>
    if(error) return <Error/>

  return (
    <>
    <div>
      artisttracks
    </div>
    </>
  )
}

export default ArtistTracks