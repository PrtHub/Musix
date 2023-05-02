import cover from '../assets/cover-art.jpg'

const ArtistCard = ({ track }) => {
  return (
    <>
    <div className="flex flex-col w-52 h-[16rem] p-3 bg-white/10 bg-opacity-20 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <img src={track.images?.background ? track.images?.background :  cover } alt="coverart" className="w-full h-56 rounded-lg" />
    <p className="text-white font-semiboldbold text-lg mt-4 truncate">{track.subtitle}</p>
    </div>
    </>
  )
}

export default ArtistCard