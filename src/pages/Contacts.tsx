import Contact from '../assets/images/contact.svg';
import ContactTwo from '../assets/images/contacttwo.svg';

export default function Contacts(){
    return (
        <section className='bg-primary-gray-1 h-1000 py-10rem px-14rem flex items-center justify-center flex-row gap-7'>
            <aside className= "h-full w-full relative flex items-end">
                <img src={ContactTwo} alt="Get in Touch" className='drop-shadow-2xl absolute top-0 right-6 h-64 animate-floatTwo'/>
                <img src={Contact} alt="Contact Us" className='h-[90%] drop-shadow-2xl animate-floatOne'/>

            </aside>
            <article className="h-full w-full flex flex-col">
                <h2 className='text-5xl font-bold text-white font-poppins-semibold mb-auto'>Get in Touch.</h2>
                <form action="" className="flex flex-col gap-8 justify-end w-full font-poppins-light">
                    <input type="text" placeholder="Name" className="w-full h-12 p-2 outline-hidden shadow-2xl bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-white text-white focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs"/>
                    <input type="text" placeholder="Email" className="w-full h-12 p-2 outline-hidden shadow-2xl bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-white text-white focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs"/>
                    <input type="text" placeholder="Subject" className="w-full h-12 p-2 outline-hidden shadow-2xl bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-white text-white focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs"/>
                    
                    <textarea name="" id="" placeholder="Message" className="w-full h-72 p-2 outline-hidden shadow-2xl resize-none bg-white border-b-[5px] border-primary-gray-3 bg-opacity-20 placeholder:text-white text-white focus:bg-primary-gray-2 hover:cursor-type focus:cursor-text focus:placeholder:text-primary-gray-3 duration-150 rounded-xs"></textarea>

                    <input type="submit" className="self-start w-auto h-auto px-5 py-3 bg-white text-secondary-blue-1 font-poppins-medium" value="Send Message"/>
                </form>

            </article>
        </section>
    )
}