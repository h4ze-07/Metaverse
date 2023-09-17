import React from 'react'
import { whatsNew } from '../assets/images'
import styles from '../styles'
import { newFeatures } from '../constants'
import NewFeatures from '../components/NewFeatures'
import SmallText from '../components/SmallText'

import {motion} from 'framer-motion'
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion'

const WhatsNew = () => {
  return (
    <section className={`px-[20px] ${styles.innerWidth} mt-[60px] lg:mt-[130px]`}>

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center'>

        <div className='flex flex-col items-center lg:items-start lg:mt-[70px]'>

          <motion.div variants={fadeIn('down', 'tween', 0.3, 0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}>
            <SmallText label='Whats New?' />
          </motion.div>
          
          <motion.h2 className='sectionHeading lg:max-w-[600px] text-center lg:text-start' variants={fadeIn('down', 'tween', 0.5, 0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}>
            What's new about Metaversus?
          </motion.h2>

          <motion.div className='mt-[31px] flex flex-col extraSm:flex-row gap-[46px]' variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}>
            {newFeatures.map((feature, index) => (
              <NewFeatures key={feature.title} {...feature} index={index} />
            ))}
          </motion.div>

        </div>

        <motion.div className='mt-[40px] md:mt-0' variants={planetVariants("right")} initial='hidden' whileInView='show' viewport={{once: false}}>
          <img src={whatsNew} alt="get start" width={720} height={550}  className='object-contain'/>
        </motion.div>
      </div>

    </section>
  )
}

export default WhatsNew
