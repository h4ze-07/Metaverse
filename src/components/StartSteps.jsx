import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const StartSteps = ({id, text, container}) => {
  
  return (
    <motion.div className="flex gap-2 sm:gap-[30px]"
    variants={fadeIn('left', 'tween',  id * 0.4, 0.5)}
    >
      <div className="smCardsNums">
        <p className="text-white text-[20px] font-bold leading-normal">{id}</p>
      </div>
      <p className={`text-[14px] extraSm:text-[18px] sm:leading-[32px] text-[#B0B0B0] ${container} `}>{text}</p>
    </motion.div>
  )
}
export default StartSteps;
