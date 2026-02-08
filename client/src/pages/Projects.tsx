import ProjectCard from '../components/ProjectCard';
import TrackhubImg from '../assets/images/trackhubimg.jpg';
import HarbestImg from '../assets/images/harbestimg.jpg';
import PmsImage from '../assets/images/pmsimage.jpg';
import KdrImg from '../assets/images/kdrimg.png';
import { FiGithub } from "react-icons/fi";
import { DiMsqlServer, DiMysql, DiRedis  } from "react-icons/di";
import { FaJava, FaAndroid, FaPython } from "react-icons/fa";
import { SiSqlite, SiClarifai, SiFlask } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { LuSpeech } from "react-icons/lu";

export default function Projects(){
    return (
        <section id="projects" className='h-auto flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-sm:px-[4.5rem] max-xs:px-[2.5rem]'>
            <h2 className="font-poppins-semibold text-5xl mb-[15rem] text-white max-2xl:mb-[5rem] max-md:text-4xl">My Projects</h2>
            <ul className='grid grid-cols-3 h-auto w-full justify-items-center gap-2 max-2xl:grid-cols-2 max-2xl:gap-5 max-840:grid-cols-1'>
                <li className='w-full h-auto'>
                    <ProjectCard 
                    title='KidDoReads' 
                    picture={KdrImg} 
                    description='An English literacy learning platform for Grade 3 students.' 
                    linkIconDisplay={[FiGithub]}
                    links={['https://github.com/FumI4096/KidDoReads']}
                    langIconDisplay={[SiFlask, DiMysql, LuSpeech, DiRedis, AiOutlineOpenAI]}
                    />
                </li>
                <li className='w-full h-auto'>
                    <ProjectCard 
                    title='TrackHub' 
                    picture={TrackhubImg} 
                    description='A mobile platform for lost and found items.' 
                    linkIconDisplay={[FiGithub]}
                    links={['https://github.com/FumI4096/TrackHub']}
                    langIconDisplay={[FaJava, SiClarifai, SiSqlite, FaAndroid, AiOutlineOpenAI]}
                    />
                </li>
                <li className='w-full h-auto'>
                    <ProjectCard 
                    title='HarBest' 
                    picture={HarbestImg} 
                    description='A kiosk platform for selling and promoting agricultural tools.' 
                    linkIconDisplay={[FiGithub]}
                    links={['https://github.com/FumI4096/HarBest']}
                    langIconDisplay={[FaJava, DiMysql]}
                    />
                </li>
                <li className='w-full h-auto'>
                    <ProjectCard 
                    title='Payroll System' 
                    picture={PmsImage} 
                    description='A simple Python-based application for managing payrolls.' 
                    linkIconDisplay={[FiGithub]}
                    links={['https://github.com/FumI4096/Payroll-Management-System']}
                    langIconDisplay={[FaPython, DiMsqlServer]}
                    />
                </li>
            </ul>
        </section>
    )
}