import { FaJava, FaReact, FaPython, FaAndroid, FaPhp  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSqlite, SiArduino, SiCanva  } from "react-icons/si";
import { DiMsqlServer, DiMysql  } from "react-icons/di";
import LanguageIcon from "../components/LanguageIcons";

export default function Stack(){
    return (
        <section className='bg-primary-gray-1 h-1000 py-10rem px-12rem flex items-center justify-between flex-col'>
            <h2 className="">My Services</h2>
            <article className="h-[400px] flex flex-wrap justify-center items-center gap-20">
                <LanguageIcon icon={FaJava} iconLanguage="Java" />
                <LanguageIcon icon={FaReact} iconLanguage="React"/>
                <LanguageIcon icon={FaPhp} iconLanguage="PHP"/>
                <LanguageIcon icon={RiTailwindCssFill} iconLanguage="Tailwind CSS"/>
                <LanguageIcon icon={FaPython} iconLanguage="Python"/>
                <LanguageIcon icon={FaAndroid } iconLanguage="Android Studio"/>
                <LanguageIcon icon={SiTypescript} iconLanguage="TypeScript"/>
                <LanguageIcon icon={DiMsqlServer} iconLanguage="MsSQL Server"/>
                <LanguageIcon icon={DiMysql} iconLanguage="MySQL"/>
                <LanguageIcon icon={SiSqlite} iconLanguage="SQLite"/>
                <LanguageIcon icon={SiArduino} iconLanguage="Arduino"/>
                <LanguageIcon icon={SiCanva} iconLanguage="Canva"/>
            </article>
        </section>
    )
}

