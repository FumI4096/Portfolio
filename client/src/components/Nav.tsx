import { FaHome } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom"

function scrollSection(section: string){
    window.location.href = section
}

export default function Nav(){
    return (
        <nav className='scroll-smooth fixed h-auto w-auto flex flex-col gap-7 rounded-full justify-between item-center left-11 top-[50%] -translate-y-[50%]'>
            <a
                onClick={() => scrollSection("/#home")}
                className="group cursor-pointer relative"
            >
                <span className="hidden opacity-0 absolute text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium group-hover:block group-hover:left-3 group-hover:animate-nav-display">Home</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition group-hover:bg-white">
                    <FaHome className="text-[1.45rem] text-white transition group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#projects")}
                className="group cursor-pointer relative"
            >
                <span className="hidden opacity-0 absolute text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium group-hover:block group-hover:left-3 group-hover:animate-nav-display">Projects</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition group-hover:bg-white">
                    <GrTasks className="text-[1.45rem] text-white transition group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#credentials")}
                className="group cursor-pointer relative"
            >
                <span className="hidden opacity-0 absolute text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium group-hover:block group-hover:left-3 group-hover:animate-nav-display">Credentials</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition group-hover:bg-white">
                    <PiCertificateFill className="text-[1.45rem] text-white transition group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#services")}
                className="group cursor-pointer relative"
            >
                <span className="hidden opacity-0 absolute text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium group-hover:block group-hover:left-3 group-hover:animate-nav-display">Services</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition group-hover:bg-white">
                    <FaTools className="text-[1.45rem] text-white transition group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#contacts")}
                className="group cursor-pointer relative"
            >
                <span className="hidden opacity-0 absolute text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium group-hover:block group-hover:left-3 group-hover:animate-nav-display">Contacts</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition group-hover:bg-white">
                    <BiSolidPhoneCall className="text-[1.45rem] text-white transition group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <Link to='/blog' className="group cursor-pointer relative">
                <span className="hidden opacity-0 absolute text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium group-hover:block group-hover:left-3 group-hover:animate-nav-display">Blog</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition group-hover:bg-white">
                    <IoNewspaper className="text-[1.45rem] text-white transition group-hover:text-primary-gray-2"/>
                </div>
            </Link>
        </nav>
    )
}