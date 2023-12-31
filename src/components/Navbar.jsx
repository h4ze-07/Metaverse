import React, { useState } from 'react'
import { search, menu, close } from '../assets/icons'
import { fadeIn, navVariants } from '../utils/motion'

import {motion} from 'framer-motion'
import { socials } from '../constants'

const Navbar = () => {

  const [navMenu, setNavMenu] = useState(false)

  const [searchInput, setSearchInput] = useState(false)

  const handleSearch = () => {
    setSearchInput(!searchInput)
  }

  const handleClick = () => {
    setNavMenu(!navMenu)
  }

  return (
    <motion.nav className='py-8 relative px-[20px] mx-auto'
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    viewport={{once: false}}
    >
      <div className='absolute gradient-01 w-[50%] inset-0' />

      <div className='mx-auto flex justify-between gap-6 w-full max-w-[1170px] relative'>
        <div className='flex items-center justify-center w-[24px] h-[24px] relative'>
          <img src={search} alt="search" className='w-[24px] h-[24px] object-contain z-10 cursor-pointer' onClick={handleSearch}/>
          {searchInput &&
            <motion.input type='text' className='bg-[#ffffff1a] text-[white] text-18px px-[20px] py-[8px] outline-none rounded-[35px] absolute top-[60px] left-3 border border-transparent focus:border-[white] z-10' placeholder='Search...'
            onBlur={handleSearch}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, delay: 0.3}}
          />}
        </div>
        <h2 className='text-[24px] font-extrabold text-white leading-normal z-10 cursor-pointer'>METAVERSES</h2>
        <img src={!navMenu ? menu : close} alt="menu" className='w-[24px] h-[24px] object-contain z-10 cursor-pointer'
        onClick={handleClick}
        />
      {navMenu &&
        <div className='absolute top-[70px] -right-[10px] flex flex-col gap-4'>
            {socials.map((social, ind) => (
              <motion.div key={social.name} className='w-[24px] h-[24px] z-30 cursor-pointer'
              onClick={handleClick}
              >
                <motion.img src={social.url} alt={social.name} className='w-full h-full object-contain' 
                variants={fadeIn('down', 'tween', ind * 0.35, 0.4)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
                whileHover={{scale: 1.3}}
                />
              </motion.div>
            ))}
        </div>
      }
      </div>
    </motion.nav>
  )
}

export default Navbar


