import ProjectCard from '../components/ProjectCard';

export default function Projects(){
    return (
        <section className='h-1000 flex flex-col bg-primary-gray-1 px-14rem py-10rem items-center justify-between '>
        <h2 className="font-poppins-semibold text-5xl text-white">My Projects</h2>
        <ul className='grid grid-cols-2 h-auto w-full gap-11'>
            <li>
                <ProjectCard title='Test' video='Test' />
            </li>
            <li>
                <ProjectCard title='Test' video='Test' />
            </li>
            <li>
                <ProjectCard title='Test' video='Test' />
            </li>

            
        </ul>
    </section>
    )
}