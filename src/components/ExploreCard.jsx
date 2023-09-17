import React from 'react'
import { headset } from '../assets/icons'

import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion'

const ExploreCard = ({imgUrl, title, id}) => {
  return (
    <motion.div className='max-w-[370px] lg:w-[320px] xl:w-[170px] hover:w-[370px] h-[563px] rounded-[24px] relative overflow-hidden transition-[width]'
    initial={{opacity: 0, x: -100}}
    whileInView={{opacity: 1, x: 0}}
    transition={{delay: id * 0.3, duration: 0.7}}
    viewport={{once: false}}
    >
        <img src={imgUrl} alt={title} className='absolute w-full h-full object-cover object-left-top  ' />

        <div className='flex flex-col justify-end relative h-full group cursor-pointer px-[32px]'>
          <div className='w-[60px] h-[60px] rounded-[24px] bg-[#ffffff14] overflow-hidden z-10 hidden items-center justify-center group-hover:flex'>
            <img src={headset} alt="headset" className='w-[24px] h-[24px] z-20'/>
          </div>
          <p className='text-[16px] text-white leading-normal hidden group-hover:block mt-[16px] mb-[24px]'>ENTER METAVERSE</p>
          <h3 className=' rotate-[270deg] group-hover:rotate-0 z-10 text-[32px] text-white lg:mb-[134px] xl:mb-[64px] group-hover:mb-[32px] transition-all duration-[0.9s] whitespace-nowrap'>{title}</h3>
        </div>
    </motion.div>
  )
}

export default ExploreCard
