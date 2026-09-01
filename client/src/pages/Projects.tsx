import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/constants/projects.ts";

export default function Projects(){
    return (
        <section id="projects" className='max-w-[1700px] mx-auto h-auto flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-sm:px-[4.5rem] max-xs:px-[1rem]'>
            <h2 className="font-poppins-semibold text-5xl mb-[15rem] text-white max-2xl:mb-[5rem] max-md:text-4xl">My Projects</h2>
            <ul className='grid grid-cols-3 h-auto w-full justify-items-center gap-5 max-2xl:grid-cols-2 max-2xl:gap-7 max-840:grid-cols-1'>
                {projects.map((project, index) => {
                    return (
                        <ProjectCard 
                        key={index}
                        title={project.title}
                        picture={project.picture}
                        description={project.description}
                        linkIconDisplay={project.linkIconDisplay}
                        links={project.links}
                        langIconDisplay={project.langIconDisplay}
                        ongoingProject={project.ongoingProject}
                        />
                    )
                })}
            </ul>
        </section> 
    )
}