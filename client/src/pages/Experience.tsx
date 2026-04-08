import experiences from "../assets/experiences.json";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {

    return (
        <section
            id="experience"
            className="bg-primary-gray-1 h-auto py-10rem px-14rem flex flex-col items-center justify-center gap-7 max-2xl:h-auto max-xl:py-6rem max-xl:px-8rem max-md:px-[4.5rem] max-xs:px-[2.5rem]"
        >
            <h2 className="font-poppins-semibold text-5xl mb-[15rem] text-white max-2xl:mb-[5rem] max-md:text-4xl">
                Experiences
            </h2>
            {experiences.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    date={exp.date}
                    role={exp.role}
                    title={exp.title}
                    client={exp.client}
                    orderedList={exp.orderedList}
                    stackTags={exp.stackTags}
                />
            ))}
        </section>
    );
}