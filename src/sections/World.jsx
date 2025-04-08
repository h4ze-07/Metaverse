import { motion } from 'framer-motion'
import React from 'react'
import { Map, people1, people2, people3 } from '../assets/images'
import SmallText from '../components/SmallText'
import styles from '../styles'
import { fadeIn } from '../utils/motion'

const World = () => {
    return (
        <section className={`px-[20px] ${styles.innerWidth} ${styles.sectionMarginTop} relative z-[1]`}>

            <div className='flex flex-col items-center'>

                <motion.div variants={fadeIn('down', 'tween', 0.2, 0.6)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>
                    <SmallText label='People on the World' />
                </motion.div>

                <motion.h2 className='sectionHeading text-center max-w-[962px]' variants={fadeIn('up', 'tween', 0.2, 0.6)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>
                    Track friends around you and invite them to play together in the same world
                </motion.h2>

                <motion.div className='mt-[30px] sm:mt-[68px] relative' variants={fadeIn('up', 'tween', 0.3, 0.6)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>
                    <img src={Map} alt="map" className='w-full max-w-[1170px]' />

                    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                        <img src={people1} alt="people" className="w-full h-full" />
                    </div>

                    <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                        <img src={people2} alt="people" className="w-full h-full" />
                    </div>

                    <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
                        <img src={people3} alt="people" className="w-full h-full" />
                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default World
