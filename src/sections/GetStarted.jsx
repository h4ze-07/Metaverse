import SmallText from '../components/SmallText'
import styles from '../styles'
import { startingFeatures } from '../constants'
import StartSteps from '../components/StartSteps'
import { getStartedImg } from '../assets/images'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant, textVariant2 } from '../utils/motion'

const GetStarted = () => {
  return (
    <section className={`px-[20px] ${styles.innerWidth} ${styles.sectionMarginTop}`}>

      <motion.div className='flex flex-col items-center  lg:flex-row-reverse lg:items-start lg:justify-evenly'
      >

        <motion.div className='flex flex-col items-center lg:items-start'
        variants={fadeIn('left', 'tween', 0.5, 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        >
          <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}} className='flex flex-col items-center lg:items-start'>
            <motion.div variants={textVariant(1)} className=''>
              <SmallText label='How Metaverus Works' />
            </motion.div>
            
            <motion.h2 className='sectionHeading lg:max-w-[471px] text-center lg:text-start sm:max-w-[400px] md:max-w-[570px]'
            variants={fadeIn('down', 'tween', 1.2, 0.7)}
            initial='hidden'
            whileInView='show'
            >
              Get started with just a few clicks
            </motion.h2>

            <motion.div className='mt-[31px] flex flex-col md:flex-row md:flex-wrap md:justify-center lg:flex-col gap-[24px]'
            variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
            >
              {startingFeatures.map((step, index) => (
                <StartSteps key={step.id} {...step} />
                ))}
            </motion.div>

          </motion.div>
        </motion.div>

        <motion.div
        variants={fadeIn('right', 'tween', 0.5, 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        >
          <img src={getStartedImg} alt="get start" width={800} height={550}  className='object-contain'/>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default GetStarted
