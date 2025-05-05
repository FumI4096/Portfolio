interface CardProps{
    title: string
    picture: string
    issued: string

}

export default function CertificateCard({title, picture, issued} : CardProps){
    return (
        <li >
            <a href="https://www.credly.com/users/seimon-maiquez" target="_blank" rel="noopener" className="h-full group w-full bg-primary-gray-2 p-7 flex flex-col gap-7 justify-between shadow-inset-custom-1 text-white hover:-translate-y-5 transition-all duration-300 cursor-pointer">
                <div className="h-auto w-full flex gap-10">
                    <img src={picture} alt="" className="h-40 float-left drop-shadow-lg max-2xl:h-32 max-[1460px]:h-36"/>
                    <div className=" w-full h-full flex flex-col justify-center relative">
                        <p className="font-poppins-semibold text-xl max-2xl:text-lg">{title}</p>
                        <p className="font-medium max-2xl:text-base">{issued}</p>
                        <span className="transition-all duration-20 self-end group-hover:block hidden font-poppins-light absolute bottom-0 text-[0.85rem]">Click to See More</span>
                    </div>

                </div>
            </a>
        </li>
    )
}