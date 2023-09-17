import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';

const NewFeatures = ({imgUrl, title, subtitle, container, index}) => {
  return (
    <motion.div className='flex flex-col'
    variants={fadeIn('right', 'tween', index * 0.3, 0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.25}}
    >
      <div className='smCardsNums'>
        <img src={imgUrl} alt="features" className='w-[24px] h-[24px] object-contain' />
      </div>
      <h3 className='mt-[24px] mb-[16px] text-[24px] text-white font-bold'>{title}</h3>
      <p className={`text-[16px] sm:leading-[29px] text-[#B0B0B0] ${container}`}>{subtitle}</p>
    </motion.div>
  )
}

export default NewFeatures
