import React from 'react'
import { arrow } from '../assets/icons'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const InsightCard = ({imgUrl, title, subtitle, index}) => {
  return (
    <motion.div className='w-full flex flex-col items-center lg:flex-row gap-5 lg:gap-[62px]'
    variants={fadeIn('left', 'tween', index * 0.3, 0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
    >
      
      <div className='w-full max-w-[670px] max-h-[430px] lg:w-[270px] lg:h-[250px] rounded-[32px] overflow-hidden'>
        <img src={imgUrl} alt="insight" className='h-full w-full object-cover' />
      </div>

      <div className='flex flex-col lg:flex-1 items-center sm:flex-row md:justify-between gap-8 md:w-full max-w-[670px] lg:max-w-none'>

        <div className='flex flex-col md:max-w-[440px] lg:max-w-[646px] group'>
          <h3 className='text-white text-[22px] font-bold lg:text-[42px] lg:leading-[52px] mb-[16px] cursor-pointer group-hover:text-[#8d39a3] transition-[text]'>{title}</h3>
          <p className='text-[14px] extraSm:text-[20px] text-[#ffffff46] group-hover:text-white lg:leading-[40px] z-10'>{subtitle}</p>
        </div>

        <div className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full border-2 border-[#F5F5F5] flex flex-shrink-0 items-center justify-center lg:self-center cursor-pointer hover:border-[#8d39a3]' >
          <img src={arrow} alt="arrow" className='w-[25px] h-[25px] md:w-[48px] md:h-[48px]' />
        </div>

      </div>

    </motion.div>
  )
}

export default InsightCard
