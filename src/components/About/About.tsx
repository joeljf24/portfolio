"use client"
import { motionTransitionsAbout } from "@/utils/motionTransition";
import { motion } from "framer-motion"
import { ArrowDownToLine, Eye } from "lucide-react"
import { dataAboutSkills } from "./About.data";

export default function About() {
  return (
    <div className="flex items-center min-h-screen px-6 mx-auto align-middle mt-24 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
      <motion.div initial={motionTransitionsAbout.initial}
        animate={motionTransitionsAbout.animate}
        transition={motionTransitionsAbout.transition}
      >
        <div className="md:flex md:items-center mb-10 md:mb-10">
          <div className="flex justify-center md:w-full">
            <img
              src="https://cdn.discordapp.com/attachments/1111334962361274408/1193980897402294434/rounded.png?ex=65aeb05d&is=659c3b5d&hm=37fe0157079f284b3d15e1c7d2c3cf71e72eda6fb2c1d7bc951bee7a123395b9&"
              alt="Foto de perfíl"
              className="w-72 h-72 md:mr-8"
            />
          </div>
          <div>
            <h1 className="mb-6 md:text-4xl"><br /> <span className="text-secondary">Sobre mí</span></h1>
            <p className="mb-6">Desarrollador Web Full Stack graduado de Henry, con mayor orientación al Frontend.<br /> Apasionado por el diseño, la funcionalidad y la lógica, me encuentro en una búsqueda constante de desafíos para crecer como profesional.<br /> Mi objetivo es realizar trabajos de calidad, priorizando la elegancia y la experiencia de usuario.</p>
            <div className='flex md:justify-end gap-3 md:gap-10 md:flex-row'>
              <a
                href="https://media.licdn.com/dms/document/media/D4D2DAQE3Jp68u7Uvew/profile-treasury-document-pdf-analyzed/0/1696948398546?e=1705536000&v=beta&t=yKuTJhKrlH78Rp4xcNPdw65MriyN8MVRvf6f1oxdXWg"
                target="_blank"
                className='flex px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'
              >
                <Eye className="mr-3" />
                Ver CV
              </a>
              <a
                href="https://drive.usercontent.google.com/download?id=1jsZoGgCJeSHvSpzlMGV2XDB9bZfn5ghA&export=download&authuser=0&confirm=t&uuid=6d97dcc3-e8ac-4737-b978-d106166779ab&at=APZUnTUna_XJjknUz77yV4Ir4gTB:1704737177585"
                target="_blank"
                className='flex px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary'>
                <ArrowDownToLine className="mr-2" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="md:text-2xl mb-10">Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {dataAboutSkills.map(({ title, icon }) => (
              <div key={title} className="flex flex-col items-center rounded-xl border-2 border-white py-2 px-2">
                <div className="mb-2">
                  {icon}
                </div>
                <div>
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
