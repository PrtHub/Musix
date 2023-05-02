import loader from '../assets/yy3.gif'
import spinner from '../assets/Spinner.svg'

const Loader = ({ title }) => (
  <div className='w-full flex justify-center items-center flex-col mt-40'>
    <img src={spinner} alt=""  className='w-40 h-40 object-contain'/>
   <h1 className='font-bold text-2xl text-[#333333] mt-2'>{ title || "Loading...."}</h1>
    </div>
);

export default Loader;