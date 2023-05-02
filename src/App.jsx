import './App.css'

import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Sidebar, Searchbar, TopPlay, MusicPlayer } from './components'
import { Discover, TopArtists, Recommended, Search, ArtistTracks, SongDetails } from './pages';


const App = () => {
  const { activeSong } = useSelector((state) => state.player)

  return (
    <div className='relative flex'>
      <div className=''>
      <Sidebar/>
      </div>

       <div className='flex-1 flex flex-col background'>
        <Searchbar/>

        <div className='px-6 h-[calc(100vh-25px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
           <div className='flex-1 h-fit'>
            <Routes>
               <Route path="/" element={<Discover />} />
               <Route path="/song-details/:songid" element={<SongDetails />} />
               <Route path="/top-artists" element={<TopArtists />} />
               <Route path="/recommended" element={<Recommended />} />
               <Route path="/artist-top-tracks/:artistId" element={<ArtistTracks />} />
               <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
           </div>
           <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
       </div>

       {activeSong?.title &&(
        <div className='absolute bottom-0 left-0 right-0 flex p-2 animate-slideup bg-gradient-to-br from-white/5 to-[#0072c6] bg-transparent backdrop-blur-lg rounded-t-3xl z-10'>
        <MusicPlayer/>
       </div>
       )}

    </div>
  )
}

export default App
