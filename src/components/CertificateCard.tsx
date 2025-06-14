interface CardProps{
    title: string
    picture: string
    issued: string

}

export default function CertificateCard({title, picture, issued} : CardProps){
    return (
        <li >
            <a href="https://www.credly.com/users/seimon-maiquez" target="_blank" rel="noopener" className="h-full group w-full bg-primary-gray-2 p-7 flex flex-col gap-7 shadow-inset-custom-1 text-white hover:-translate-y-5 transition-all duration-300 cursor-pointer max-md:h-[370px] max-md:py-10">
                <div className="h-auto w-full flex gap-10 max-md:flex-col max-md:h-full max-md:gap-4 max-md:items-center">
                    <img src={picture} alt="" className="h-40 float-left drop-shadow-lg max-2xl:h-32 max-[1460px]:h-36 max-md:h-40"/>
                    <div className=" w-full h-full flex flex-col justify-center relative">
                        <p className="font-poppins-semibold text-xl max-2xl:text-lg max-md:text-center max-md:text-[1.05rem]">{title}</p>
                        <p className="font-medium max-2xl:text-base max-md:text-center max-md:mb-3 max-md:text-[14px]">{issued}</p>
                        <span className="transition-transform duration-20 self-end group-hover:block hidden font-poppins-light absolute bottom-0 text-[0.85rem] max-md:text-[0.74rem]">Click to See More</span>
                    </div>

                </div>
            </a>
        </li>
    )
}