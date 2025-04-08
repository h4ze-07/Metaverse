import { motion } from 'framer-motion'
import React from 'react'
import { cover, stamp } from '../assets/images'
import { SmallText } from '../components'
import styles from '../styles'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => {
    return (
        <section id='home' className={`mt-[60px] md:mt-[138px] overflow-hidden relative ${styles.innerWidth}`}>

            <motion.div className='absolute sm:block md:top-[10px] left-[47%]' variants={textVariant(1.1)} initial='hidden' whileInView='show' viewport={{ once: true }}>
                <SmallText label='Home' />
            </motion.div>

            <motion.div className='flex items-center justify-center flex-col pt-[20px] relative z-10'
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
            >

                <motion.h1 className={`${styles.heroHeading}`} variants={textVariant(1.1)}>
                    METAVERSE
                </motion.h1>
                <motion.h1 className={`${styles.heroHeading}`}
                    variants={textVariant(1.3)}
                >MA<span className={`inline-block ${styles.heroDText}`}></span>NESS</motion.h1>
            </motion.div>

            <motion.div className='pl-6 sm:pl-16 relative -mt-[30px] md:-mt-[60px]'
                variants={fadeIn('up', 'tween', 0.5, 0.6)}
                initial='hidden'
                animate='show'
                viewport={{ once: true }}
            >
                <img src={cover} alt="hero" className='max-h-[150px] extraSm:max-h-[250px] md:max-h-[380px] lg:max-h-[500px] w-full object-cover rounded-tl-[110px] md:rounded-tl-[180px]' />
            </motion.div>

            <motion.a href='#about' className='relative z-20 flex justify-end -mt-[40px] sm:-mt-[80px]'
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.8,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}
            >
                <img src={stamp} alt="stamp" className='w-[80px] h-[80px] sm:w-[155px] sm:h-[155px] mr-[5%] lg:mr-[160px]' />
            </motion.a>

        </section>
    )
}

export default Hero
