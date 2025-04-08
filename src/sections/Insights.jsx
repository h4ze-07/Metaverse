import React from 'react'
import { InsightCard, SmallText } from '../components/index'
import { insights } from '../constants'
import styles from '../styles'

import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'

const Insights = () => {
    return (
        <section className={`px-[20px] ${styles.innerWidth} ${styles.sectionMarginTop} relative z-[1]`}>

            <motion.div className='flex flex-col items-center'>

                <motion.div variants={textVariant(0.2)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>
                    <SmallText label='Insight' />
                </motion.div>

                <motion.h2 className='sectionHeading text-center' variants={textVariant(0.4)} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>Insight about metaverse</motion.h2>

                <div className='mt-[30px] md:mt-[50px] flex flex-col gap-[30px] w-full'>
                    {insights.map((ins, ind) => (
                        <InsightCard key={ins.title} {...ins} index={ind} />
                    ))}
                </div>
            </motion.div>

        </section>
    )
}

export default Insights
