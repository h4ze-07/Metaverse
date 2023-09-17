import React from 'react'
import styles from '../styles'
import { headset } from '../assets/icons'
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Enter = () => {
  return (
    <section className={`${styles.sectionMarginTop} ${styles.innerWidth}`}>

        <div className='flex flex-col md:flex-row justify-between items-center gap-3 px-[20px]' >

            <motion.h2 className={`sectionHeading whitespace-nowrap`}
            variants={fadeIn('right', 'tween', 0.5, 0.6)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
            >Enter The Metaverse</motion.h2>

            <motion.button className='flex gap-3 items-center justify-center py-[10px] px-[14px] sm:py-[20px] sm:px-[32px] rounded-[32px] bg-[#25618B] hover:bg-[#6aa2ca]'
            variants={fadeIn('left', 'tween', 0.5, 0.6)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
            whileHover={{scale: 1.2}}
            >
                <img src={headset} alt="enter" className='w-[24px] h-[24px]' />
                <p className='text-white uppercase text-[12px] sm:text-[16px]'>ENTER METAVERSE</p>
            </motion.button>

        </div>

    </section>
  )
}

export default Enter