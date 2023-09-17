import React from 'react'
import styles from '../styles'
import { socials } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Footer = () => {
  return (
    <footer className={`${styles.innerWidth}  mt-[60px] sm:mt-[80px] px-[20px]`}>
      
      <div className='border-t-2 border-[#ffffff1a] py-[50px] flex flex-col md:flex-row md:justify-between items-center gap-6'>
        <motion.a href="#home" className='text-white font-extrabold text-24px hover:text-[#8d39a3]'
        variants={fadeIn('down', 'tween', 0.3, 0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
        whileHover={{scale: 1.2}}
        >METAVERUS</motion.a>

        <motion.p className='text-[#ffffffb3] text-[14px] leading-[21px] opacity-[0.8] text-center'
        variants={fadeIn('down', 'tween', 0.5, 0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
        >Copyright © 2021 - 2022 Metaversus. All rights reserved.</motion.p>

        <div className='flex gap-[30px]'>
          {socials.map((social, ind) => (
            <motion.div key={social.name} className='w-[24px] h-[24px] cursor-pointer'
            >
              <motion.img src={social.url} alt={social.name} className='w-full h-full object-contain' 
              variants={fadeIn('down', 'tween', ind * 0.25, 0.4)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
              whileHover={{scale: 1.3}}
              />
            </motion.div>
          ))}
        </div>
      </div>
      

    </footer>
  )
}

export default Footer
