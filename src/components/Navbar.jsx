import React, { useState } from 'react'
import { close, menu, search } from '../assets/icons'
import { fadeIn, navVariants } from '../utils/motion'

import { AnimatePresence, motion } from 'framer-motion'
import { socials } from '../constants'

const Navbar = () => {

    const [navMenu, setNavMenu] = useState(false)

    const handleClick = () => {
        setNavMenu(!navMenu)
    }

    return (
        <motion.nav className='py-8 relative px-[20px] mx-auto'
            variants={navVariants}
            initial='hidden'
            animate='show'
            viewport={{ once: true }}
        >
            <div className='absolute gradient-01 w-[50%] inset-0' />

            <div className='mx-auto flex justify-between gap-6 w-full max-w-[1170px] relative'>
                <div className='flex items-center justify-center w-[24px] h-[24px] relative'>
                    <motion.img src={search} alt="search" className='w-[24px] h-[24px] object-contain z-10 cursor-pointer' whileHover={{ scale: 1.1 }} />
                </div>
                <h2 className='text-[24px] font-extrabold text-white leading-normal z-10 cursor-pointer'>METAVERSES</h2>
                <img src={!navMenu ? menu : close} alt="menu" className='w-[24px] h-[24px] object-contain z-10 cursor-pointer'
                    onClick={handleClick}
                />
                <AnimatePresence>
                    {navMenu &&
                        <div className='absolute top-[70px] -right-[10px] flex flex-col gap-4'>
                            {socials.map((social, ind) => (
                                <motion.div key={social.name} className='w-[24px] h-[24px] z-30 cursor-pointer'
                                    onClick={handleClick}
                                >
                                    <motion.img src={social.url} alt={social.name} className='w-full h-full object-contain'
                                        variants={fadeIn('down', 'tween', ind * 0.15, 0.4)} initial='hidden' whileInView='show' exit={{
                                            opacity: 0,
                                            y: '-20px',
                                            transition: {
                                                delay: 0.15 * ind,
                                                duration: 0.4
                                            }
                                        }} viewport={{ once: false }}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    }
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar


