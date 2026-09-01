import { FaHome } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsPersonFillGear } from "react-icons/bs";

function scrollSection(section: string){
    window.location.href = section
}

export default function Nav(){

    const navItems = [
        { icon: FaHome, label: "Home", section: "/#home" },
        { icon: GrTasks, label: "Projects", section: "/#projects" },
        { icon: BsPersonFillGear, label: "Experiences", section: "/#experience" },
        { icon: PiCertificateFill, label: "Credentials", section: "/#credentials" },
        { icon: BiSolidPhoneCall, label: "Contacts", section: "/#contacts" }
    ]

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
        max-sm:gap-0
        max-xs:px-2
        '
        >
            {navItems.map((item, index) => (
                <a
                    key={index}
                    onClick={() => scrollSection(item.section)}
                    className="group cursor-pointer relative max-lg:flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-1.5"
                >
                    <span className="hidden opacity-0 absolute left-3 text-0 px-11 top-[50%] -translate-y-[50%] text-white font-poppins-medium lg:group-hover:block lg:group-hover:animate-nav-display max-lg:static max-lg:block max-lg:opacity-100 max-lg:p-0 max-lg:text-[0.80rem] max-md:text-[0.70rem] max-sm:text-[0.44rem]">
                        {item.label}
                    </span>
                    <div className="p-3 rounded-full border-3 flex justify-center items-center transition lg:group-hover:bg-white max-lg:border-none">
                        <item.icon className="text-[1.25rem] text-white transition lg:group-hover:text-primary-gray-2 md-text-[1.45rem]"/>
                    </div>
                </a>
            ))}
        </nav>
    )
}