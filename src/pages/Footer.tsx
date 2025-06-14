import Icon from '../assets/images/icon.png';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="h-1000 flex flex-col bg-primary-gray-2 p-14rem justify-center max-xl:py-6rem max-xl:px-8rem max-md:px-[4.5rem] max-840:gap-6 max-md:h-auto">
            <section className="flex justify-between max-840:flex-col max-840:gap-20">
                <article className="flex flex-col basis-full h-72">
                    <div className='mb-12'>
                        <img src={Icon} alt="" className='h-10'/>
                    </div>

                    <p className='font-light text-white'> I’m a frontend developer based in the Philippines, from the province of Laguna. I have joined technology related curricular activities that emphasize ideas for application development, nurturing myself for hardware and software applications.
                    </p>
                </article>
                <ul className="flex basis-full justify-end h-72 gap-16 list-none max-lg:gap-11 max-840:gap-0 max-840:justify-around">
                    <li className='w-auto h-auto'>
                        <a href="https://www.facebook.com/mimon.maiquez/" rel="noopener" target="_blank" className="w-auto h-auto">
                            <FaFacebook className="text-4xl text-white cursor-pointer" />
                        </a>
                    </li>
                    <li className='w-auto h-auto'>
                        <a href="https://github.com/FumI4096" rel="noopener" target="_blank" className="w-auto h-auto">
                            <FaGithub className="text-4xl text-white cursor-pointer" />
                        </a>
                    </li>
                    <li className='w-auto h-auto'>
                        <a href="https://www.instagram.com/se1_mon/" rel="noopener" target="_blank" className="w-auto h-auto">
                            <FaInstagram className="text-4xl text-white cursor-pointer" />
                        </a>
                    </li>
                    <li className='w-auto h-auto'>
                        <a href="https://www.linkedin.com/in/seimon-elias-maiquez-3159602b1/" rel="noopener" target="_blank" className="w-auto h-auto">
                            <FaLinkedin className="text-4xl text-white cursor-pointer" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <hr className="mb-1" />
                <p className="text-center text-white font-poppins-light max-md:text-sm">&#169; 2025 Mimon. All rights reserved.</p>
            </section>
        </footer>
    )
}