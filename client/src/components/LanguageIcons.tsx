import { IconProps } from "../assets/constants/languages.ts";

export default function LanguageIcon({icon: Icon, iconLanguage} : IconProps){
    return (
        <div className="">
            <div className="p-6 group bg-transparent rounded-md relative ">
                <Icon className="text-7xl text-white group-hover:blur-xs group-hover:scale-75 group-hover:text-gray-hover-1 duration-100 max-md:text-6xl" />
                <div className="hidden absolute justify-center items-center h-full w-full bg-black/30 inset-0 group-hover:flex duration-100 rounded-lg">
                    <span className="text-[0.875rem] text-wrap text-center p-10 font-bold text-white duration-100 font-mono sm:text-base">{iconLanguage}</span>
                </div>
            </div>
        </div>
    )
}