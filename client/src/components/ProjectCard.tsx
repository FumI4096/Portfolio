import { IconType } from "react-icons";

interface CardProps{
    title: string;
    description: string;
    picture: string;
    linkIconDisplay: IconType[];
    langIconDisplay: IconType[];

}

export default function ProjectCard({title, picture, description, linkIconDisplay, langIconDisplay}: CardProps){
    return (
        <div className="h-auto w-full bg-primary-gray-2 text-white flex flex-col rounded-2xl hover:drop-shadow-2xl hover:-translate-y-1.5 duration-300">
            <div className="h-[12rem] bg-black rounded-2xl bg-cover" style={{backgroundImage: `url(${picture})`}}>
            </div>
            <div className="flex flex-col p-3 h-40">
                <span className="text-2xl font-poppins-semibold">{title}</span>
                <span className="mb-auto text-[0.94rem] font-light">{description}</span>
                <div className="flex justify-between gap-1.5 text-[1.7rem]">
                    <div className="flex gap-1.5">
                        {
                            langIconDisplay.map((LangIconComponent, index) => (
                                <LangIconComponent key={index} />
                            ))
                        }

                    </div>
                    <div className="flex gap-1.5">
                        {
                            linkIconDisplay.map((LinkIconComponent, index) => (
                                <LinkIconComponent key={index} className="cursor-pointer" />
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}