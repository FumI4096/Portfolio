import { FaJava, FaReact, FaPython, FaAndroid, FaPhp  } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSqlite, SiArduino, SiCanva  } from "react-icons/si";
import { DiMsqlServer, DiMysql  } from "react-icons/di";
import LanguageIcon from "../components/LanguageIcons";

export default function Stack(){
    return (
        <section className='bg-primary-gray-1 h-1000 py-10rem px-14rem flex items-center justify-between flex-col max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem'>
            <h2 className="font-poppins-semibold text-5xl text-white max-2xl:mb-[5rem]">Services &#38; Tools</h2>
            <article className="h-[400px] flex flex-wrap justify-center items-center gap-20 max-2xl:h-auto">
                <LanguageIcon icon={FaJava} iconLanguage="Java" />
                <LanguageIcon icon={FaReact} iconLanguage="React"/>
                <LanguageIcon icon={FaPhp} iconLanguage="PHP"/>
                <LanguageIcon icon={RiTailwindCssFill} iconLanguage="Tailwind CSS"/>
                <LanguageIcon icon={FaPython} iconLanguage="Python"/>
                <LanguageIcon icon={FaAndroid } iconLanguage="Android Studio"/>
                <LanguageIcon icon={SiTypescript} iconLanguage="TypeScript"/>
                <LanguageIcon icon={DiMsqlServer} iconLanguage="MS SQL Server"/>
                <LanguageIcon icon={DiMysql} iconLanguage="MySQL"/>
                <LanguageIcon icon={SiSqlite} iconLanguage="SQLite"/>
                <LanguageIcon icon={SiArduino} iconLanguage="Arduino"/>
                <LanguageIcon icon={SiCanva} iconLanguage="Canva"/>
                <LanguageIcon icon={FaGitAlt} iconLanguage="Git"/>
            </article>
        </section>
    )
}

