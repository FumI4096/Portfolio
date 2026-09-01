import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react'
import Icon from '../assets/images/icon.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Stack from './Stack';
import ResumeModal from '../components/ResumeModal'

function DevTypeAnimation(textOne: string, textTwo: string, textThree: string) {
    return (
        <TypeAnimation
            sequence={[
                textOne,
                2000,
                textTwo,
                2000,
                textThree,
                2000
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
            className="font-mono font-bold text-[1.27rem] text-white text-center max-xl:text-[1.12rem] max-sm:text-[1rem] max-md:my-4"
        />
    )
}

export default function Home(){
    const[openResume, setOpenResume] = useState(false)

    return(
        <header id='home' className="animate-fade-in-up max-w-[1700px] mx-auto scroll-smooth h-auto flex bg-background px-14rem py-10rem flex-col gap-[8rem] max-xl:py-6rem max-xl:px-8rem max-lg:h-auto max-md:gap-14 max-sm:px-[4.5rem] max-xs:py-[1.5rem] max-xs:px-[1.5rem]">
            <section className='w-full flex justify-between max-lg:flex-col max-lg:gap-14'>
                <div className='flex h-auto'>
                    <img src={Icon} alt="logo" className='h-8 sm:h-10'/>
                </div>
                <article className='flex gap-14 justify-end max-lg:gap-10 text-3xl max-lg:justify-between xs:text-4xl'>
                    <a href="https://www.facebook.com/mimon.maiquez/" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaFacebook className="text-white cursor-pointer" />
                    </a>
                    <a href="https://github.com/FumI4096" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaGithub className="text-white cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/se1_mon/" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaInstagram className="text-white cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/seimon-elias-maiquez-3159602b1/" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaLinkedin className="text-white cursor-pointer" />
                    </a>
                </article>
            </section>
            <section className='basis-full flex items-center gap-12 max-lg:flex-col-reverse'>
                <div className='basis-full flex flex-col gap-4 animate-fade-in-down items-center justify-center'>
                    <span className='font-poppins-semibold text-white text-lg sm:text-xl'>Hello I am</span>
                    <span className='font-anton-regular text-7xl text-center text-white secondary-blue-2 max-lg:text-center max-xl:text-[3.40rem] max-sm:text-[3.10rem]'>Seimon Elias S. Maiquez</span>
                    {DevTypeAnimation("Full Stack Developer", "Junior Software Engineer", "Calauan, Laguna, Philippines")}
                    <span className='font-poppins-light text-secondary-blue-2 text-[1.25rem] text-center max-2xl:mb-7 max-xl:text-[1.10rem] max-sm:text-[0.9rem]'>I have participated in technology-related curricular activities that focus on building technical and efficient applications, honing my skills in emerging technologies, server-side programming, and database management.</span>
                    <button onClick={() => setOpenResume(true)} className='h-auto w-auto px-10 py-3 bg-white rounded-4xl font-poppins-medium cursor-pointer text-sm md:text-md hover:bg-white/85'>View my Resume</button>
                </div>
            </section>
            <Stack />

            <ResumeModal isOpen={openResume} onClose={() => setOpenResume(false)} />
        </header>
    )
}