import React from 'react'
import { arrowDown } from '../assets/icons'

import SmallText from '../components/SmallText'
import styles from '../styles'

import { motion } from 'framer-motion'
import { fadeIn, slideIn, textVariant2 } from '../utils/motion'

const About = () => {
  return (
    <section  id='about' className={`flex flex-col relative z-10 items-center px-[20px] ${styles.sectionMarginTop} `}>
      
      <motion.div className='z-0 gradient-02 absolute' 
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: false, amount: 0.25}}
      transition={{duration: 0.8, delay: 0.5}}
      />

      <motion.div
      variants={slideIn('down', 'tween', 0.2, 0.3)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false}}
      >
        <SmallText label='About Metaverus' /> 
      </motion.div>

      <motion.p className='w-full text-[16px] sm:text-[22px] lg:text-[28px] xl:text-[32px] lg:max-w-[1095px] font-light mx-auto text-center text-white leading-normal lg:leading-[58px mb-[24px] overflow-hidden'
      variants={textVariant2}
      initial='hidden'
      whileInView='show'
      viewport={{once: false}}
      >
        <span className='font-bold'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className='font-bold'>madness of the metaverse</span> of today, using only <span className='font-bold'>VR</span> devices you can easily <span className='font-bold'>explore</span> the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down
      </motion.p>
      
      <motion.a href="#explore" className='w-[32px] h-[32px] flex items-center justify-center'
      variants={fadeIn('down', 'tween', 0.3, 0.6)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false}}
      >
        <img src={arrowDown} alt="arrow" className='object-contain w-full h-full' />
      </motion.a>

    </section>
  )
}

export default About
