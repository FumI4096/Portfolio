import { FaHome } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
function scrollSection(section: string){
    window.location.href = section
}

export default function Nav(){
    return (
        <nav className='fixed h-auto w-auto flex flex-col gap-7 rounded-full justify-between item-center left-11 top-[50%] -translate-y-[50%] z-50 max-xl:left-7 
        max-lg:w-full 
        max-lg:bottom-0 
        max-lg:left-0 
        max-lg:flex-row 
        max-lg:top-auto 
        max-lg:bg-primary-gray-4/80 
        max-lg:rounded-none 
        max-lg:translate-0
        max-lg:px-10
        max-lg:py-2.5
        max-sm:px-8
        max-xs:px-2
        '
        >
            <a
                onClick={() => scrollSection("/#home")}
                className="group cursor-pointer relative max-lg:flex max-lg:flex-col-reverse max-lg:items-center max-lg:justify-between"
            >
                <span className="hidden opacity-0 absolute left-3 text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium lg:group-hover:block lg:group-hover:animate-nav-display max-lg:static max-lg:block max-lg:opacity-100 max-lg:p-0 max-lg:text-[0.80rem] max-md:text-[0.70rem] max-sm:text-[0.68rem]">Home</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition lg:group-hover:bg-white max-lg:border-none">
                    <FaHome className="text-[1.45rem] text-white transition lg:group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#projects")}
                className="group cursor-pointer relative max-lg:flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-1.5"
            >
                <span className="hidden opacity-0 absolute left-3 text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium lg:group-hover:block lg:group-hover:animate-nav-display max-lg:static max-lg:block max-lg:opacity-100 max-lg:p-0 max-lg:text-[0.80rem] max-md:text-[0.70rem] max-sm:text-[0.68rem]">Projects</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition xl:group-hover:bg-white max-lg:border-none">
                    <GrTasks className="text-[1.45rem] text-white transition xl:group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#credentials")}
                className="group cursor-pointer relative max-lg:flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-1.5"
            >
                <span className="hidden opacity-0 absolute left-3 text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium lg:group-hover:block lg:group-hover:animate-nav-display max-lg:static max-lg:block max-lg:opacity-100 max-lg:p-0 max-lg:text-[0.80rem] max-md:text-[0.70rem] max-sm:text-[0.68rem]">Credentials</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition xl:group-hover:bg-white max-lg:border-none">
                    <PiCertificateFill className="text-[1.45rem] text-white transition xl:group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#services")}
                className="group cursor-pointer relative max-lg:flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-1.5"
            >
                <span className="hidden opacity-0 absolute left-3 text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium lg:group-hover:block lg:group-hover:animate-nav-display max-lg:static max-lg:block max-lg:opacity-100 max-lg:p-0 max-lg:text-[0.80rem] max-md:text-[0.70rem] max-sm:text-[0.68rem]">Services</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition lg:group-hover:bg-white max-lg:border-none">
                    <FaTools className="text-[1.45rem] text-white transition lg:group-hover:text-primary-gray-2"/>
                </div>
            </a>
            <a
                onClick={() => scrollSection("/#contacts")}
                className="group cursor-pointer relative max-lg:flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-1.5"
            >
                <span className="hidden opacity-0 absolute left-3 text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium lg:group-hover:block lg:group-hover:animate-nav-display max-lg:static max-lg:block max-lg:opacity-100 max-lg:p-0 max-lg:text-[0.80rem] max-md:text-[0.70rem] max-sm:text-[0.68rem]">Contacts</span>
                <div className="p-3 rounded-full border-3 flex justify-center items-center transition lg:group-hover:bg-white max-lg:border-none">
                    <BiSolidPhoneCall className="text-[1.45rem] text-white transition lg:group-hover:text-primary-gray-2"/>
                </div>
            </a>
        </nav>
    )
}