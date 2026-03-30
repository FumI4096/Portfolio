import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import { FaJava, FaReact, FaPython, FaAndroid, FaPhp, FaNodeJs, FaDigitalOcean, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSqlite, SiCanva } from "react-icons/si";
import { DiMsqlServer, DiMysql, DiRedis } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";
import { LuSpeech } from "react-icons/lu";

import LanguageIcon from "../components/LanguageIcons";

const backEndIcons = [
    { icon: FaNodeJs,          iconLanguage: "NodeJS" },
    { icon: FaPhp,             iconLanguage: "PHP" },
    { icon: FaPython,          iconLanguage: "Python" },
    { icon: BiLogoFlask,       iconLanguage: "Flask" },
    { icon: BiLogoPostgresql,  iconLanguage: "PostgreSQL" },
    { icon: DiMsqlServer,      iconLanguage: "MS SQL Server" },
    { icon: DiMysql,           iconLanguage: "MySQL" },
    { icon: SiSqlite,          iconLanguage: "SQLite" },
    { icon: DiRedis,           iconLanguage: "Redis" },
];

const frontEndIcons = [
    { icon: FaHtml5,           iconLanguage: "HTML" },
    { icon: FaCss3Alt,         iconLanguage: "CSS" },
    { icon: IoLogoJavascript,  iconLanguage: "JavaScript" },
    { icon: FaJava,            iconLanguage: "Java" },
    { icon: FaReact,           iconLanguage: "ReactJS" },
    { icon: RiTailwindCssFill, iconLanguage: "Tailwind CSS" },
    { icon: SiTypescript,      iconLanguage: "TypeScript" },
];

const toolIcons = [
    { icon: SiCanva,           iconLanguage: "Canva" },
    { icon: FaGitAlt,          iconLanguage: "Git" },
    { icon: FaDigitalOcean,    iconLanguage: "Digital Ocean" },
    { icon: AiFillOpenAI,      iconLanguage: "OpenAI" },
    { icon: LuSpeech,          iconLanguage: "Speechgen.io" },
    { icon: FaAndroid,         iconLanguage: "Android Studio" },
    { icon: FaFigma,           iconLanguage: "Figma" },
];

// Reusable carousel row component
function CarouselRow({ icons, direction = "forward" }: { icons: typeof backEndIcons, direction?: "forward" | "backward" }) {
    const looped = [...icons, ...icons];

    // ✅ Each row gets its own plugin instance and ref
    const autoScroll = useRef(
        AutoScroll({ speed: 1, direction, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true, align: "start" },
        [autoScroll.current]
    );

    return (
        // ✅ Blur fade on left and right using a pseudo-element mask
        <div className="relative w-full flex">
            {/* Left blur */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none
                            bg-gradient-to-r from-primary-gray-2 to-transparent" />
            {/* Right blur */}
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none
                            bg-gradient-to-l from-primary-gray-2 to-transparent" />

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {looped.map(({ icon, iconLanguage }, i) => (
                        <div key={i} className="flex-none ml-10 max-md:ml-6 max-sm:ml-4">
                            <LanguageIcon icon={icon} iconLanguage={iconLanguage} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Stack() {
    return (
        <section
            id="services"
            className="h-auto pt-40 flex items-center justify-between flex-col gap-10 max-xl:pt-10 max-md:pt-0
            "
        >

            <CarouselRow icons={frontEndIcons} />
            <CarouselRow icons={backEndIcons} direction="backward" />
            <CarouselRow icons={toolIcons} />
        </section>
    );
}