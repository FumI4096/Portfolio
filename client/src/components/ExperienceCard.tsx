import { ExperienceProps } from "../assets/constants/experiences.ts";

export default function ExperienceCard({ date, role, title, client, orderedList, stackTags }: ExperienceProps) {
    return (
        <aside className="bg-primary-gray-2 flex items-center justify-between w-full p-[5rem] rounded-xl max-lg:p-[4rem] max-sm:p-[3rem] shadow-custom-2/90 hover:-translate-y-3 transition-all duration-300">
            <article className="w-full flex flex-col">
                <span className="text-white text-[2.20rem] font-poppins-semibold w-full max-sm:text-[1.70rem] max-sm:text-center">{date}</span>
                <span className="text-white text-[1.30rem] font-poppins-medium w-full max-sm:text-center max-sm:text-[1rem] max-sm:mb-2">
                    {role} {title ? `• ${title}` : ''}
                </span>
                <span className="text-sm text-gray-300 font-poppins-light w-full max-sm:text-[0.9rem] max-sm:text-center">
                    {client}
                </span>
                <hr className="my-7 max-sm:my-2" />
                <ul className="text-white list-disc pl-5 font-poppins-light text-[0.90rem] w-full mb-10">
                    {orderedList.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="flex gap-2 mt-4 w-full flex-wrap">
                    {stackTags.map((tag, index) => (
                        <span key={index} className="text-primary-gray-1 font-poppins-semibold text-xs bg-white px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </article>
        </aside>
    )
}