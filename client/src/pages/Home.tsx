import { useState } from 'react'
import Icon from '../assets/images/icon.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MimonImage from '../assets/images/mimongradphoto.png'
import Stack from './Stack';
import ResumeModal from '../components/ResumeModal'

    const[openResume, setOpenResume] = useState(false)

function Home(){
    return(
        <header id='home' className="scroll-smooth h-auto flex bg-primary-gray-2 px-14rem py-10rem flex-col gap-[8rem] max-xl:py-6rem max-xl:px-8rem max-lg:h-auto max-md:gap-14 max-sm:px-[4.5rem] max-xs:px-[2.5rem]">
            <section className='w-full flex justify-between max-md:flex-col max-md:gap-14'>
                <div className='flex h-auto'>
                    <img src={Icon} alt="logo" className='h-10'/>
                </div>
                <article className='flex gap-14 justify-end max-lg:gap-10 max-md:justify-between max-md:gap-0'>
                    <a href="https://www.facebook.com/mimon.maiquez/" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaFacebook className="text-4xl text-white cursor-pointer" />
                    </a>
                    <a href="https://github.com/FumI4096" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaGithub className="text-4xl text-white cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/se1_mon/" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaInstagram className="text-4xl text-white cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/seimon-elias-maiquez-3159602b1/" rel="noopener" target="_blank" className="w-auto h-auto">
                        <FaLinkedin className="text-4xl text-white cursor-pointer" />
                    </a>
                </article>
            </section>
            <section className='basis-full flex items-center gap-12 max-lg:flex-col-reverse'>
                <div className='basis-full flex flex-col gap-4 animate-fade-in-left max-lg:items-center justify-center'>
                    <span className='font-poppins-semibold text-white text-3xl max-2xl:text-xl max-sm:text-lg'>Hello I am</span>
                    <span className='font-anton-regular text-7xl text-white secondary-blue-2 mb-7 max-2xl:text-[3.80rem] max-lg:text-center max-xl:text-[3.50rem] max-sm:text-[3.10rem]'>Seimon Elias S. Maiquez</span>
                    <span className='font-poppins-light text-secondary-blue-2 text-[1.25rem] max-2xl:mb-7 max-2xl:text-[1.20rem] max-xl:text-[1.10rem] max-lg:text-center max-sm:text-[1rem]'>I’m a <span className='font-bold'>full-stack developer</span> based in Calauan, Laguna, Philippines. I have participated in technology-related curricular activities that focus on building robust and efficient applications, honing my skills in emerging technologies, server-side programming, and database management.</span>
                    <button onClick={() => setOpenResume(true)} className='h-auto w-auto px-10 self-end py-3 bg-white rounded-4xl font-poppins-medium max-2xl:self-end max-lg:self-center'>View my Resume</button>
                </div>
                <aside className='basis-full animate-fade-in-photo'>
                    <img src={MimonImage} alt="Seimon's Image" className='max-lg:max-h-[500px]'/>
                </aside>
            </section>
            <Stack />

            <ResumeModal isOpen={openResume} onClose={() => setOpenResume(false)} />
        </header>
    )
}

export default Home;