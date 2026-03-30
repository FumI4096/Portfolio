import { IconType } from "react-icons";

interface IconProps{
    icon: IconType;
    iconLanguage: string;
}

export default function LanguageIcon({icon: Icon, iconLanguage} : IconProps){
    return (
        <div className="">
            <div className="p-6 group bg-primary-gray-2 rounded-md relative ">
                <Icon className="text-7xl text-white group-hover:blur-xs group-hover:scale-75 group-hover:text-gray-hover-1 duration-100 max-md:text-6xl" />
                <div className="hidden absolute justify-center items-center h-full w-full bg-black/30 inset-0 group-hover:flex duration-100">
                    <span className="text-base text-wrap text-center p-10 font-bold text-white duration-100 font-mono">{iconLanguage}</span>
                </div>
            </div>
        </div>
    )
}