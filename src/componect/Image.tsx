 import Fade_UP from '../animtion/Animation'
import  {motion} from 'framer-motion'
const Image = () => {
 
  return (
    <div >
            <motion.img
      
        alt=" Profice Image  130 X 130 PX"
        className="md:w-150 md:h-150 sm:w-32 sm:h-50 "
             initial={Fade_UP.initial}
              animate={ Fade_UP.animate}
              transition={Fade_UP.Transition}
      />
 </div>
  )
}

export default Image
