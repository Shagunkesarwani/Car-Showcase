"use client";
import Image from 'next/image';
import CustomButton  from './CustomButton';
import { motion } from 'framer-motion';
const Hero = () => {

    const handleScroll=() =>{

    }

  return (
    <div className="hero">
        <div className ="flex-1 pt-36 padding-x ">
            <h1 className="hero__title">
                Find, book or rent a car — 
                quickly
                and easily!
            </h1>

            <p className="hero__subtitle">
                    Streamline your car rental experiance
                    with our efforless booking process.
            </p>
            <CustomButton 
                title ="Explore Cars"
                containerStyles="bg-green-700
                text-white rounded-full mt-10" 
                handleClick={handleScroll}
            />
          </div>
          
            <div className='hero__image-container'>
            <motion.div
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="hero__image"
        >
                    <Image  src="/Imagee.jpg" alt="hero"
                    fill className="object-contain" />
                     </motion.div>
                </div>   
             </div>
  )
}

export default Hero;