import { IconType } from "react-icons";

interface IconProps{
    icon: IconType;
    iconLanguage: String;
}

export default function LanguageIcon({icon: Icon, iconLanguage} : IconProps){
    return (
        <div className="">
            <div className="p-6 group bg-primary-gray-2 rounded-md shadow-2xl relative ">
                <Icon className="text-6xl text-white group-hover:blur-xs group-hover:scale-75 group-hover:text-gray-hover-1 duration-100" />
                <div className="hidden absolute justify-center items-center h-full w-full bg-black bg-opacity-25 duration-100 inset-0 group-hover:flex">
                    <span className="text-base text-wrap text-center p-10 font-bold text-white duration-100 font-mono">{iconLanguage}</span>
                </div>
            </div>
        </div>
    )
}