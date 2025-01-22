import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer className="h-1000 flex flex-col bg-primary-gray-2 p-14rem justify-center">
            <section className="flex justify-between">
                <article className="flex flex-row basis-full h-72">
                    <h1>Mimon.</h1>
                    <p></p>
                </article>
                <article className="flex basis-full justify-end h-72 gap-16">
                    <FaFacebook className="text-4xl text-white cursor-pointer" />
                    <FaGithub className="text-4xl text-white cursor-pointer" />
                    <FaInstagram className="text-4xl text-white cursor-pointer" />
                    <FaLinkedin className="text-4xl text-white cursor-pointer" />
                    <FaXTwitter className="text-4xl text-white cursor-pointer" />
                </article>
            </section>
            <section>
                <hr className="mb-1" />
                <p className="text-center text-white">&#169; 2025 Mimon. All rights reserved.</p>
            </section>
        </footer>
    )
}