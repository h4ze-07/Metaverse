import React from 'react'
import SmallText from '../components/SmallText'
import {ExploreCard} from '../components/index'
import styles from '../styles/index'
import { exploreWorlds } from '../constants'

import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'

const Explore = () => {
  return (
    <motion.section id='explore' className={`${styles.sectionMarginTop} hidden lg:flex flex-col items-center px-[20px]`}
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    >
      
      <motion.div variants={textVariant(1.1)}>
        <SmallText label='The World' />
      </motion.div>

      <motion.h2 className='lg:max-w-[885px] text-center sectionHeading'
      variants={fadeIn('down', 'tween', 0.5, 0.7)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false}}
      >Choose the world you want to explore</motion.h2>

      <div className='flex mt-[50px] justify-center flex-wrap gap-[30px] xl:max-w-none'>
        {exploreWorlds.map((world) => (
          <ExploreCard key={world.id} {...world} />
        ))}
      </div>
    </motion.section>
  )
}

export default Explore
