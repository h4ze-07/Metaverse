import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { headset } from '../assets/icons'

const ExploreCard = ({ imgUrl, title, id }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", id % 2 === 0 ? "20%" : '-20%']);

    return (
        <div className={`w-full sm:w-[80%] lg:w-2/3 rounded-[24px] overflow-hidden relative ${id % 2 === 0 && 'self-end'} aspect-[3_/_1.5] lg:aspect-[3_/_1.5] group`} ref={ref}>


            <motion.div className={`w-[1280px] h-[540px] absolute ${id % 2 === 0 ? 'right-[-20px]' : 'left-[-20px]'} top-[-40px] `} style={{ x: x }}>
                <img src={imgUrl} alt={title} className='object-cover w-full h-full group-hover:scale-105 transition-transform' />
            </motion.div>

            <div className='flex flex-col justify-end relative h-full cursor-pointer px-[24px] pb-5'>
                <div className='w-[60px] h-[60px] rounded-[24px] bg-[#ffffff14] overflow-hidden flex items-center justify-center'>
                    <img src={headset} alt="headset" className='w-[24px] h-[24px]' />
                </div>
                <p className='text-[16px] text-white leading-normal mt-[16px] mb-[24px]'>ENTER METAVERSE</p>
                <h3 className='text-[32px] text-white font-bold lg:mb-[134px] xl:mb-[64px] whitespace-nowrap'>{title}</h3>
            </div>
        </div>
    )
}

export default ExploreCard
