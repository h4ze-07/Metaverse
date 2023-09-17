import React from 'react'
import styles from '../styles'
import { insights } from '../constants'
import {SmallText, InsightCard} from '../components/index'

import { motion } from 'framer-motion'
import { staggerContainer, textVariant } from '../utils/motion'

const Insights = () => {
  return (
    <section className={`px-[20px] ${styles.innerWidth} ${styles.sectionMarginTop}`}>

        <motion.div className='flex flex-col items-center'>

          <motion.div variants={textVariant(0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}>
            <SmallText label='Insight' />
          </motion.div>

          <motion.h2 className='sectionHeading text-center' variants={textVariant(0.7)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}>Insight about metaverse</motion.h2>

          <div className='mt-[30px] md:mt-[50px] flex flex-col gap-[30px] w-full'>
            {insights.map((ins, ind) => (
                <InsightCard key={ins.title} {...ins} index={ind}/>
            ))}
          </div>
        </motion.div>

    </section>
  )
}

export default Insights
