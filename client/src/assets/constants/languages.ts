import { IconType } from "react-icons";

import { FaJava, FaReact, FaPython, FaAndroid, FaPhp, FaNodeJs, FaDigitalOcean, FaHtml5, FaCss3Alt, FaFigma, FaGithub, FaLaravel, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSqlite, SiPrisma, SiCloudinary, SiExpo } from "react-icons/si";
import { DiMsqlServer, DiMysql, DiRedis } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";

export interface IconProps{
    icon: IconType;
    iconLanguage: string;
}

export interface CarouselRowProps {
    icons: IconProps[];
    direction?: "forward" | "backward";
}

export const backEndIcons: IconProps[] = [
    { 
        icon: FaNodeJs,          
        iconLanguage: "NodeJS" 
    },
    { 
        icon: FaPhp,             
        iconLanguage: "PHP" 
    },
    { 
        icon: FaPython,          
        iconLanguage: "Python" 
    },
    { 
        icon: BiLogoFlask,       
        iconLanguage: "Flask" 
    },
    { 
        icon: BiLogoPostgresql,  
        iconLanguage: "PostgreSQL" 
    },
    { 
        icon: DiMsqlServer,      
        iconLanguage: "MS SQL Server" 
    },
    { 
        icon: DiMysql,           
        iconLanguage: "MySQL" 
    },
    { 
        icon: SiSqlite,          
        iconLanguage: "SQLite" 
    },
    { 
        icon: DiRedis,           
        iconLanguage: "Redis" 
    },
    {
        icon: FaLaravel,
        iconLanguage: "Laravel"
    }
];

export const frontEndIcons: IconProps[] = [
    { 
        icon: FaHtml5,           
        iconLanguage: "HTML" 
    },
    { 
        icon: FaCss3Alt,         
        iconLanguage: "CSS" 
    },
    { 
        icon: IoLogoJavascript,  
        iconLanguage: "JavaScript" 
    },
    { 
        icon: FaJava,            
        iconLanguage: "Java" 
    },
    { 
        icon: FaReact,           
        iconLanguage: "ReactJS" 
    },
    { 
        icon: RiTailwindCssFill, 
        iconLanguage: "Tailwind CSS" 
    },
    { 
        icon: SiTypescript,      
        iconLanguage: "TypeScript" 
    },
];

export const toolIcons: IconProps[] = [
    { 
        icon: FaGitAlt,          
        iconLanguage: "Git" 
    },
    { 
        icon: FaDigitalOcean,    
        iconLanguage: "Digital Ocean" 
    },
    { 
        icon: AiFillOpenAI,      
        iconLanguage: "OpenAI" 
    },
    { 
        icon: FaAndroid,         
        iconLanguage: "Android Studio" 
    },
    { 
        icon: FaFigma,           
        iconLanguage: "Figma" 
    },
    { 
        icon: FaGithub,          
        iconLanguage: "GitHub" 
    },
    {
        icon: SiPrisma,
        iconLanguage: "Prisma"
    },
    {
        icon: SiCloudinary,
        iconLanguage: "Cloudinary"
    },
    {
        icon: SiExpo,
        iconLanguage: "Expo"
    },
    {
        icon: FaDocker,
        iconLanguage: "Docker"
    }
];
