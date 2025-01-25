interface CardProps{
    title: string
    picture: string
    issued: string

}

export default function CertificateCard({title, picture, issued} : CardProps){
    return (
        <li >
            <a href="https://www.credly.com/users/seimon-maiquez" target="_blank" rel="noopener" className="h-full group w-full bg-primary-gray-2 p-8 flex flex-col gap-7 justify-between shadow-inset-custom-1 text-white hover:-translate-y-5 transition-all duration-300 cursor-pointer">
                <div className="h-auto w-full flex gap-10 ">
                    <img src={picture} alt="" className="h-40 float-left drop-shadow-lg"/>
                    <div className="flex flex-col justify-center relative">
                        <p className="font-poppins-semibold break-words text-2xl">{title}</p>
                        <p className="font-medium">{issued}</p>
                        <span className="transition-all duration-20 self-end group-hover:block hidden font-poppins-light absolute bottom-0">Click to See More</span>
                    </div>

                </div>
            </a>
        </li>
    )
}