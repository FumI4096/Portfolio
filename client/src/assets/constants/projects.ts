import YzImg from '../images/yzplatform.png';
import KdrImg from '../images/kdrimg.png';
import TrackhubImg from '../images/trackhubimg.jpg';
import HarbestImg from '../images/harbestimg.jpg';
import PmsImage from '../images/pmsimage.jpg';
import PrintingImg from '../images/printingimg.png';
import ArtisanImg from '../images/artisanimg.png';

import { FiGithub } from "react-icons/fi";
import { DiMsqlServer, DiMysql, DiRedis  } from "react-icons/di";
import { FaJava, FaAndroid, FaPython, FaLaravel, FaDiscord, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSqlite, SiClarifai, SiFlask, SiExpress, SiMongodb, SiPrisma } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { LuSpeech } from "react-icons/lu";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from 'react-icons';

export interface ProjectProps {
    title: string;
    picture: string;
    description: string;
    linkIconDisplay?: IconType[];
    links?: string[];
    langIconDisplay: IconType[];
    ongoingProject?: boolean;
}

export const projects: ProjectProps[] = [
    {
        "title": "Artisan Portfolio",
        "picture": ArtisanImg,
        "description": "A portfolio website showcasing artisan's work and skills.",
        "langIconDisplay": [DiMysql, SiExpress, FaReact, FaNodeJs, SiPrisma],
        "ongoingProject": true
    },
    {
        "title": "CreativeCorner",
        "picture": PrintingImg,
        "description": "A personalized printing business system for managing orders, inventory, and customer information.",
        "langIconDisplay": [SiMongodb, BiLogoPostgresql, SiExpress, FaReact, FaNodeJs],
        "ongoingProject": true
    },
    {
        "title": "Yakuza Platform",
        "picture": YzImg,
        "description": "A staff portal with a dedicated discord bot for the Yakuza staff community.",
        "langIconDisplay": [FaLaravel, BiLogoPostgresql, FaDiscord]
    },
    {  
        "title": "KidDoReads",
        "picture": KdrImg,
        "description": "An English literacy learning platform for Grade 3 students.",
        "langIconDisplay": [SiFlask, DiMysql, LuSpeech, DiRedis, AiOutlineOpenAI]
    },
    {
        "title": "TrackHub",
        "picture": TrackhubImg,
        "description": "A mobile platform for lost and found items.",
        "linkIconDisplay": [FiGithub],
        "links": ["https://github.com/FumI4096/TrackHub"],
        "langIconDisplay": [FaJava, SiClarifai, SiSqlite, FaAndroid, AiOutlineOpenAI]
    },
    {
        "title": "HarBest",
        "picture": HarbestImg,
        "description": "A kiosk platform for selling and promoting agricultural tools.",
        "linkIconDisplay": [FiGithub],
        "links": ["https://github.com/FumI4096/HarBest"],
        "langIconDisplay": [FaJava, DiMysql]
    },
    {
        "title": "Payroll System",
        "picture": PmsImage,
        "description": "A payroll system for managing employee salaries and benefits.",
        "linkIconDisplay": [FiGithub],
        "links": ["https://github.com/FumI4096/Payroll-System"],
        "langIconDisplay": [FaPython, DiMsqlServer]
    }

]