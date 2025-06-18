import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { LuMessageSquareCode } from "react-icons/lu";
import { Link } from "react-router-dom"

function scrollSection(section: string){
    window.location.href = section
}

export default function Nav(){
    return (
        <nav className='scroll-smooth fixed h-auto w-auto flex flex-col gap-11 bg-white rounded-full p-6 justify-between item-center left-11 top-[50%] -translate-y-[50%]'>
            <a
                onClick={() => scrollSection("/#home")}
                className={`group`}
            >
                <span className="hidden">Home</span>
                <FaHome className="text-[1.30rem] cursor-pointer"/>
            </a>
            <a
                onClick={() => scrollSection("/#projects")}
            >
                <span className="hidden">Projects</span>
                <GrProjects className="text-[1.30rem] cursor-pointer"/>
            </a>
            <a
                onClick={() => scrollSection("/#credentials")}
            >
                <span className="hidden">Credentials</span>
                <GrCertificate className="text-[1.30rem] cursor-pointer"/>
            </a>
            <a
                onClick={() => scrollSection("/#services")}
            >
                <span className="hidden">Services</span>
                <FaTools className="text-[1.30rem] cursor-pointer"/>
            </a>
            <a
                onClick={() => scrollSection("/#contacts")}
            >
                <span className="hidden">Contacts</span>
                <IoIosContacts className="text-[1.30rem] cursor-pointer"/>
            </a>
            <Link to='/blog'>
                <span className="hidden">Contacts</span>
                <LuMessageSquareCode className="text-[1.30rem] cursor-pointer"/>
            </Link>
        </nav>
    )
}