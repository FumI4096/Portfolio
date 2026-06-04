import { IconType } from "react-icons";

interface CardProps{
    title: string;
    description: string;
    picture: string;
    linkIconDisplay?: IconType[];
    langIconDisplay: IconType[]; 
    links?: string[] | [];
    ongoingProject?: boolean;
}

export default function ProjectCard({title, picture, description, linkIconDisplay, langIconDisplay, links, ongoingProject}: CardProps){
    return (
        <div className="h-auto w-full bg-primary-gray-2 text-white flex flex-col rounded-2xl hover:drop-shadow-2xl hover:-translate-y-1.5 duration-300 relative">
            <div className="h-[14rem] bg-black rounded-2xl bg-cover bg-center" style={{backgroundImage: `url(${picture})`}}>
            </div>
            <div className="flex flex-col p-3 h-56">
                <span className="text-2xl font-poppins-semibold">
                    {title}
                </span>
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
                        {linkIconDisplay?.map((LinkIconComponent, index) => {
                            const href = links?.[index];
                            return (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer"
                                >
                                    <LinkIconComponent />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            {ongoingProject && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md shadow-2xl">
                    Ongoing
                </div>
            )}

        </div>
    )
}