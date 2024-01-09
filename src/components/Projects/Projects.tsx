"use client"
import { fadeIn } from "@/utils/motionTransition"
import { motion } from "framer-motion"
import { cardContent } from "./Projects.data"
import { useState } from "react"

export function Projects() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "360px",
            opacity: 1
        },
        collapsed: {
            width: "200px",
            opacity: 0.6
        }
    }

  return (
    <div className="grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center">
        <div>
            <motion.h1
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="my-5 text-2xl text-center md:text-4xl mb-10"
            >
                Mis <span className="text-secondary">proyectos realizados</span>.
            </motion.h1>
            <motion.div
                className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                {cardContent.map(({id, title, imageUrl, description, skills}) => (
                    <motion.div
                        key={id}
                        className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex && "expanded"}`}
                        initial={{ opacity: 1 }}
                        variants={ cardVariants }
                        animate={ id === expandedIndex ? 'expanded' : 'collapsed'}
                        exit={{
                            opacity: 1
                        }}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleClick(id)}
                        style={{
                            backgroundImage: `url(${imageUrl})`
                        }}
                    >
                        <div className="flex flex-col justify-end h-full">
                            <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                <h2 className="text-xl font-semibold text-center text-white">{title}</h2>
                                {id === expandedIndex && (
                                    <>
                                        <p>{description}</p>
                                        <div className="flex gap-5 mt-3">
                                            {skills.map((data, index) => (
                                                <a key={index} href={data.href} target="_blank">{data.icon}</a>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}