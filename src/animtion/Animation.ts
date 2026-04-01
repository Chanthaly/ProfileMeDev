import { easeOut } from "framer-motion";


const Fade_UP = {
  initial:{ opacity: 0, y:50},
  animate:{opacity:1 , y:0} ,
   Transition:{
    duration: 2,
     ease: easeOut
   }

}
export default Fade_UP