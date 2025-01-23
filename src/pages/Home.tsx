import Icon from '../assets/images/icon.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home(){
    return(
        <header className="h-1000 flex bg-primary-gray-2 px-14rem py-10rem flex-col">
            <section className='w-full flex justify-between'>
                <div className='flex h-auto'>
                    <img src={Icon} alt="" className='h-10'/>
                </div>
                <article className='flex gap-14 justify-end'>
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
            <section className='basis-full flex items-center'>
                <div className='basis-full flex flex-col gap-4 h-[400px]'>
                    <span className='font-poppins-semibold text-white text-3xl'>Hello I am,</span>
                    <span className='font-anton-regular text-7xl text-white secondary-blue-2 mb-7'>Seimon Elias S. Maiquez</span>
                    <span className='font-poppins-light text-secondary-blue-2 text-[1.25rem] mb-auto'>I’m a <span className='font-bold'>frontend developer</span> based in the Philippines, from the province of Laguna. I have joined technology related curricular activities that emphasize ideas for application development, nurturing myself for hardware and software applications.</span>
                    <a href="">Know more About Me</a>
                </div>
                <aside className='basis-full'>
                    {/*image*/}
                </aside>
            </section>
        </header>
    )
}

export default Home;