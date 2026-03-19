import { FaJava, FaReact, FaPython, FaAndroid, FaPhp, FaNodeJs, FaDigitalOcean, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSqlite, SiCanva  } from "react-icons/si";
import { DiMsqlServer, DiMysql, DiRedis  } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoFlask } from "react-icons/bi";
import { LuSpeech } from "react-icons/lu";

import LanguageIcon from "../components/LanguageIcons";

export default function Stack(){
    return (
        <section id="services" className='bg-primary-gray-1 h-auto py-5 px-14rem flex items-center justify-between flex-row max-xl:py-6rem max-xl:px-8rem max-md:px-[4.5rem] max-xs:px-[2.5rem]'>
            <h2 className="font-poppins-semibold text-5xl text-white ">Services &#38; Tools</h2>
            <article className="h-auto grid grid-cols-5 gap-5 max-2xl:h-auto">
                <LanguageIcon icon={FaHtml5} iconLanguage="HTML" />
                <LanguageIcon icon={FaCss3Alt} iconLanguage="CSS" />
                <LanguageIcon icon={IoLogoJavascript} iconLanguage="JavaScript" />
                <LanguageIcon icon={FaJava} iconLanguage="Java" />
                <LanguageIcon icon={FaReact} iconLanguage="ReactJS"/>
                <LanguageIcon icon={FaNodeJs} iconLanguage="NodeJS"/>
                <LanguageIcon icon={FaPhp} iconLanguage="PHP"/>
                <LanguageIcon icon={RiTailwindCssFill} iconLanguage="Tailwind CSS"/>
                <LanguageIcon icon={SiTypescript} iconLanguage="TypeScript"/>
                <LanguageIcon icon={FaPython} iconLanguage="Python"/>
                <LanguageIcon icon={BiLogoFlask} iconLanguage="Flask"/>
                <LanguageIcon icon={FaAndroid } iconLanguage="Android Studio"/>
                <LanguageIcon icon={DiMsqlServer} iconLanguage="MS SQL Server"/>
                <LanguageIcon icon={DiMysql} iconLanguage="MySQL"/>
                <LanguageIcon icon={SiSqlite} iconLanguage="SQLite"/>
                <LanguageIcon icon={DiRedis} iconLanguage="Redis"/>
                <LanguageIcon icon={SiCanva} iconLanguage="Canva"/>
                <LanguageIcon icon={FaGitAlt} iconLanguage="Git"/>
                <LanguageIcon icon={FaDigitalOcean} iconLanguage="Digital Ocean"/>
                <LanguageIcon icon={AiFillOpenAI} iconLanguage="OpenAI"/>
                <LanguageIcon icon={LuSpeech} iconLanguage="Speechgen.io"/>                
            </article>
        </section>
    )
}

