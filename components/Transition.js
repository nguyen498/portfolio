/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion'

const Transition = ({ children, className, easeIn = false, pageTransition = false }) => {
  const pageTransitionVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      y: 0,
      transition: {
        type: 'linear',
      },
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        type: 'linear',
      },
    },
  }
  const easeInVariants = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
    },
  }

  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransitionVariants}
      className={className}
      // transition={{ type: 'linear' }}
    >
      {children}
    </motion.main>
  )
}

export default Transition
