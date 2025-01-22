import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="h-1000 flex flex-col bg-primary-gray-2 p-14rem justify-center">
            <section className="flex justify-between">
                <article className="flex flex-row basis-full h-72">
                    <h1>Mimon.</h1>
                    <p></p>
                </article>
                <article className="flex basis-full justify-end h-72 gap-16">
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
            <section>
                <hr className="mb-1" />
                <p className="text-center text-white">&#169; 2025 Mimon. All rights reserved.</p>
            </section>
        </footer>
    )
}