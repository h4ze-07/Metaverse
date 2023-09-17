import React from 'react'
import styles from '../styles'
import { SmallText } from '../components'
import { cover, stamp } from '../assets/images'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => {
  return (
    <section id='home' className={`mt-[60px] md:mt-[138px] overflow-hidden relative ${styles.innerWidth}`}>
      
      <motion.div className='absolute sm:block md:top-[10px] left-[47%]' variants={textVariant(1.1)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}> 
        <SmallText label='Home' />
      </motion.div>

      <motion.div className='flex items-center justify-center flex-col pt-[20px] relative z-10'
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      >

        <motion.h1 className={`${styles.heroHeading}`} variants={textVariant(1.1)}>
          METAVERSE
        </motion.h1>
        <motion.h1 className={`${styles.heroHeading}`}
        variants={textVariant(1.3)}
        >MA<span className={`inline-block ${styles.heroDText}`}></span>NESS</motion.h1>
      </motion.div>

      <motion.div className='pl-6 sm:pl-16 relative -mt-[30px] md:-mt-[60px]'
      variants={slideIn('right', 'tween', 0.5, 0.6)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false}}
      >
        <img src={cover} alt="hero" className='max-h-[150px] extraSm:max-h-[250px] md:max-h-[380px] lg:max-h-[500px] w-full object-cover rounded-tl-[110px] md:rounded-tl-[180px]' />
      </motion.div>

      <motion.a href='#about' className='relative z-20 flex justify-end -mt-[40px] sm:-mt-[80px]'
      variants={slideIn('down', 'tween', 0.8, 0.4)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false}}
      >
        <img src={stamp} alt="stamp" className='w-[80px] h-[80px] sm:w-[155px] sm:h-[155px] mr-[5%] lg:mr-[160px]' />
      </motion.a>

    </section>
  )
}

export default Hero
