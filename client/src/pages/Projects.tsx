import ProjectCard from '../components/ProjectCard';
import TrackhubImg from '../assets/images/trackhubimg.jpg'
import HarbestImg from '../assets/images/harbestimg.jpg'
import SuppliesImg from '../assets/images/suppliesimg.png'
import { FiGithub } from "react-icons/fi";
import { BsGlobeAmericas } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaAndroid } from "react-icons/fa";
import { SiClarifai } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";

export default function Projects(){
    return (
        <section className='h-1000 flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-sm:px-[4.5rem]'>
            <h2 className="font-poppins-semibold text-5xl text-white max-2xl:mb-[5rem] max-md:text-4xl">My Projects</h2>
            <ul className='grid grid-cols-3 h-auto w-full justify-items-center gap-2 max-2xl:grid-cols-2 max-2xl:gap-5 max-840:grid-cols-1'>
                <li className='w-full h-auto'>
                    <ProjectCard 
                    title='TrackHub' 
                    picture={TrackhubImg} 
                    description='A mobile platform for lost and found items.' 
                    linkIconDisplay={[FiGithub, BsGlobeAmericas]}
                    langIconDisplay={[FaJava, SiClarifai, SiSqlite, FaAndroid, AiOutlineOpenAI]}
                    />
                </li>
                <li className='w-full h-auto'>
                    <ProjectCard 
                    title='Supplies' 
                    picture={SuppliesImg} 
                    description='An e-commerce platform that focuses on school supplies.' 
                    linkIconDisplay={[FiGithub, BsGlobeAmericas]}
                    langIconDisplay={[DiMongodb, SiExpress, FaReact, FaNodeJs]}
                    />
                </li>
                <li className='w-full h-auto'>
                    <ProjectCard 
                    title='HarBest' 
                    picture={HarbestImg} 
                    description='A kiosk platform for selling and promoting agricultural tools.' 
                    linkIconDisplay={[FiGithub]}
                    langIconDisplay={[FaJava, DiMysql]}
                    />
                </li>
            </ul>
        </section>
    )
}