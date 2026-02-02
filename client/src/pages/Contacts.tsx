import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from '../assets/images/contact.svg';
import ContactTwo from '../assets/images/contacttwo.svg';

export default function Contacts(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidEmail = (email: string) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        if (!name || !email || !subject || !message) {
            toast.error("Please enter all fields!", { autoClose: 2000 });
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address!", { autoClose: 2000 });
            return;
        }

        if (message.trim().length < 10) {
            toast.error("Message must be at least 10 characters", { autoClose: 2000 });
            return;
        }


        toast.promise(
            fetch("https://portfolio-api-xi-three.vercel.app/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, subject, message }),
            })
            .then(async (res) => {
                if (!res.ok) throw new Error("Failed to send");
                return res.json();
            }),
            {
                pending: { 
                    render() {
                        return (
                            <span className='text-secondary-blue-1 text-[0.90rem] font-poppins-light font-bold'>Sending message...</span>
                        )
                    },
                },
                success: {
                    render() {
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                        return (
                            <span className='text-secondary-blue-1 text-[1rem] font-poppins-light font-bold'>Message sent successfully!</span>
                        )
                    },
                },
                error: {    
                    render() {
                        return (
                            <span className='text-red-500 text-[1rem] font-poppins-light font-bold'>Failed to send message. Unknown error.</span>
                        )
                    } 
                },
            }
        );


    }

    return (
        <section id="contacts" className='bg-primary-gray-1 h-1000 py-10rem px-14rem flex items-center justify-center flex-row gap-7 max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-md:px-[4.5rem] max-xs:px-[2.5rem]'>
            <aside className= "h-full w-full relative flex items-end max-2xl:hidden">
                <img src={ContactTwo} alt="Get in Touch" className='drop-shadow-2xl absolute top-0 right-6 h-64 animate-float-two max-2xl:hidden'/>
                <img src={Contact} alt="Contact Us" className='h-[90%] drop-shadow-2xl animate-float-one max-2xl:h-[400px]'/>
            </aside>
            <article className="h-full w-full flex flex-col">
                <h2 className='text-5xl text-white font-poppins-semibold mb-auto max-2xl:mb-[5rem] max-lg:text-4xl'>Get in Touch.</h2>
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-8 justify-end w-full font-poppins-light relative">
                    <input type="text" placeholder="Name" className="w-full h-12 p-2 outline-hidden shadow-2xl bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-primary-gray-1 text-primary-gray-1 focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs focus:text-white"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input type="email" placeholder="Email" className="w-full h-12 p-2 outline-hidden shadow-2xl bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-primary-gray-1 text-primary-gray-1 focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs focus:text-white"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="text" placeholder="Subject" className="w-full h-12 p-2 outline-hidden shadow-2xl bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-primary-gray-1 text-primary-gray-1 focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs focus:text-white"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    />
                    
                    <textarea placeholder="Message" className="w-full h-72 p-2 outline-hidden shadow-2xl resize-none bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-primary-gray-1 text-primary-gray-1 focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs focus:text-white"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <input type="submit" className="self-start w-auto h-auto px-5 py-3 bg-white text-secondary-blue-1 font-poppins-medium cursor-pointer" value="Send Message"
                    />
                    
                </form>
                <ToastContainer position='top-right' closeButton={false}/>
            </article>
        </section>
    )
}