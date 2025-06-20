import Icon from '../assets/images/icon.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MimonImage from '../assets/images/mimonimage.png'

function Home(){
    return(
        <header id='home' className="scroll-smooth h-1000 flex bg-primary-gray-2 px-14rem py-10rem flex-col max-xl:py-6rem max-xl:px-8rem max-lg:h-auto max-md:gap-14 max-sm:px-[4.5rem]">
            <section className='w-full flex justify-between max-lg:mb-[2rem] max-md:flex-col max-md:gap-14'>
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
            <section className='basis-full flex items-center gap-8 max-lg:flex-col-reverse max-lg:gap-16'>
                <div className='basis-full flex flex-col gap-4 max-lg:items-center justify-center'>
                    <span className='font-poppins-semibold text-white text-3xl max-2xl:text-xl max-sm:text-lg'>Hello I am</span>
                    <span className='font-anton-regular text-7xl text-white secondary-blue-2 mb-7 max-2xl:text-[3.80rem] max-lg:text-center max-xl:text-[3.50rem] max-sm:text-[3.10rem]'>Seimon Elias S. Maiquez</span>
                    <span className='font-poppins-light text-secondary-blue-2 text-[1.25rem] max-2xl:mb-7 max-2xl:text-[1.20rem] max-xl:text-[1.10rem] max-lg:text-center max-sm:text-[1rem]'>I’m a <span className='font-bold'>frontend developer</span> based in Calauan, Laguna, Philippines. I have joined technology related curricular activities that emphasize ideas for application development, nurturing myself for emerging technologies and software applications.</span>
                    <Link to="/blog" className='h-auto w-auto px-10 self-end py-3 bg-white max-2xl:self-start max-lg:self-center'>Check my Blog</Link>
                </div>
                <aside className='basis-full max-xl:basis-[1100px] max-lg:basis-full'>
                    <img src={MimonImage} alt="Seimon's Image"/>
                </aside>
            </section>
        </header>
    )
}

export default Home;