"use client";
import Image from 'next/image';
import { CustomButtonProps } from '@/types';
import { motion } from 'framer-motion';

const CustomButton = ({title , containerStyles,
 handleClick ,textStyles,rightIcon, btnType}: CustomButtonProps) => {
  return (
   <motion.button
   whileHover={{ scale: 1.2 }}
   disabled={false}
   type={btnType || 'button'}
   className={`custom-btn ${containerStyles}`}
   onClick={handleClick}
 >

        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
         <div className='relative w-6 h-6'>
            <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
            />
         </div>
        )}
     </motion.button>
  )
}

export default CustomButton