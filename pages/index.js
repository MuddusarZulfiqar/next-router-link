import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.h1 initial="hidden" animate="visible" variants={{
      hidden: {
        scale:0.8,
        opacity:0,
      },
      visible: {
        scale:1,
        opacity:1,
        transition:{
          delay:0.5,
        }
      }
    }}>Welcome NextJs</motion.h1>
  )
}
