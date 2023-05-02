import React from 'react'
import { BsFillVolumeUpFill, BsFillVolumeMuteFill, BsFillVolumeDownFill } from 'react-icons/bs';

const VolumeBar = ({value, min, max, onChange, setVolume }) => {
  return (
    <div className='hidden flex-1 lg:flex items-center'>
     {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onChange={() => setVolume(0)} />}
     {value <= 0.5 && value > 0 && <BsFillVolumeDownFill size={25} color="#FFF" onChange={() => setVolume(0)} />}
     {value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onChange={() => setVolume(1)} />}
     <input 
     min={min}
     max={max}
     type='range'
     step='any'
     value={value}
     onChange={onChange}
     className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  )
}

export default VolumeBar