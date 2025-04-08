import { motion } from 'framer-motion';
import React from 'react';
import { planet9, stamp } from '../assets/images';
import styles from '../styles';

import { fadeIn } from '../utils/motion';

const Feedback = () => {
    return (
        <section className={`${styles.sectionMarginTop} ${styles.innerWidth} px-[20px] relative z-10`}>

            <motion.img src={stamp} alt="stamp" className='absolute hidden lg:block w-[80px] h-[80px] sm:w-[155px] sm:h-[155px] object-contain z-20 left-[280px] xl:left-[320px] top-[45px]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 1.2 }}
            />

            <div className='flex flex-col-reverse lg:flex-row gap-[32px]'>

                <motion.article className='flex flex-col relative lg:max-w-[370px] max-h-[610px] px-[30px] pb-[30px] rounded-[32px] border border-[#6A6A6A]'
                >
                    <motion.h3 className='mt-[30px] sm:mt-[50px] xl:mt-[163px] mb-[8px] text-white text-[25px] lg:text-[32px] font-bold leading-normal z-10'
                        variants={fadeIn('up', 'tween', 0, 0.6)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}
                    >Samantha</motion.h3>
                    <motion.h4 className='text-[18px] text-white mb-[24px] z-10'
                        variants={fadeIn('up', 'tween', 0, 0.5)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}
                    >Founder Metaverus</motion.h4>
                    <motion.p className='text-[14px] extraSm:text-[20px] sm:text-[25px] pb-[20px] lg:text-[24px] xl:leading-[45px] text-white z-10'
                        variants={fadeIn('up', 'tween', 0.2, 0.3)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}
                    >“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</motion.p>
                    <div className='feedback-gradient' />
                </motion.article>

                <motion.div className='relative flex-shrink-1 bg-[#C4C4C4] rounded-[40px] overflow-hidden'
                    variants={fadeIn('left', 'tween', 0.2, 0.5)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}
                >
                    <img src={planet9} alt="feedback" className='w-full h-full object-cover z-10' />
                </motion.div>
            </div>

        </section>
    )
}

export default Feedback
