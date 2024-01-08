"use client"
import { fadeIn } from '@/utils/motionTransition'
import { motion } from 'framer-motion'

export function Introduction() {
  return (
    <div className="bg-[#131424] w-full z-10">
        <div className="w=full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
            <div className="container grid items-center h-full px-5 md:grid-cols-2 md:text-left">
                <motion.div
                    className='hidden w-auto h-auto mx-auto md:block'
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <img src="https://cdn.discordapp.com/attachments/1111334962361274408/1193951725334298694/Programacion.png?ex=65ae9531&is=659c2031&hm=5a61eec44cd35277aad7b4dc4d35106fc453241216cb304c8fa9c6ef0f62f6a4&" width="300px" />
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <h1 className='mb-5 text-4xl leading-tight md:mb-10'>Hola, soy Jeremías. <br />
                    <span className="">Desarrollador Web Full Stack</span></h1>
                    <p className='max-w-sm mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-xl'>
                        
                    </p>

                    <div className='flex flex-col items-center gap-3 md:gap-10 md:flex-row'>
                        <a href="/projects" className='px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                            Ver proyectos
                        </a>
                        <a href="/contact" className='px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary'>
                            Contacta conmigo
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
};
