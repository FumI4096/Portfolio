import { FaJava, FaReact, FaPython, FaAndroid, FaPhp, FaNodeJs, FaDigitalOcean } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSqlite, SiCanva  } from "react-icons/si";
import { DiMsqlServer, DiMysql  } from "react-icons/di";
import { BiLogoFlask } from "react-icons/bi";
import LanguageIcon from "../components/LanguageIcons";

export default function Stack(){
    return (
        <section id="services" className='bg-primary-gray-1 h-auto py-10rem px-14rem flex items-center justify-between flex-col max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-md:px-[4.5rem] max-xs:px-[2.5rem]'>
            <h2 className="font-poppins-semibold text-5xl mb-[15rem] text-white max-2xl:mb-[5rem] max-md:text-4xl">Services &#38; Tools</h2>
            <article className="h-[400px] flex flex-wrap justify-center items-center gap-20 max-2xl:h-auto">
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
                <LanguageIcon icon={SiCanva} iconLanguage="Canva"/>
                <LanguageIcon icon={FaGitAlt} iconLanguage="Git"/>
                <LanguageIcon icon={FaDigitalOcean} iconLanguage="Digital Ocean"/>
            </article>
        </section>
    )
}

