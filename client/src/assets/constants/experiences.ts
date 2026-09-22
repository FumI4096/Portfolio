export interface ExperienceProps {
    date: string;
    role: string;
    positionType?: string;
    title: string;
    client: string;
    orderedList: string[];
    stackTags: string[];
}

export const experiences: ExperienceProps[] = [
    {
        "date": "September 2026 - Present",
        "role": "Web Developer",
        "positionType": "Contract",
        "title": "",
        "client": "University of the Philippines - Los Baños (UPLB) - Digital Innovative Center (DIC)",
        "orderedList": ["Familiarizing with the ecosystem of the UPLB DIC, including their existing systems, workflows, and technologies", "Collaborating with senior developers to understand project requirements and contribute to ongoing projects", "Participating in code reviews, knowledge-sharing sessions to enhance skills and stay updated with best practices"],
        "stackTags": ["Laravel", "Filament", "PostgreSQL", "MySQL", "Kafka", "Git", "Docker"]
    },
    {
        "date": "August 2026 - September 2026",
        "role": "Full-Stack Developer",
        "positionType": "Internship",
        "title": "",
        "client": "CertiCode",
        "orderedList": ["Created a basic reservation system, implemented with message queues for emails, JWT authentication, and Google OAuth", "Designed the reservation system's high-level architecture, including database schema, REST APIs, and user workflows"],
        "stackTags": ["Laravel", "ReactJS", "MySQL", "Google OAuth", "SMTP"]
    },
    {
        "date": "March 2026 - May 2026",
        "role": "Full-Stack Developer",
        "positionType": "Internship",
        "title": "Training Management System",
        "client": "Department of Information and Communications Technology (DICT) - CALABARZON",
        "orderedList": ["Collaborated with fellow interns to develop a full-stack Training Management System for DICT, primarily contributing to backend development and testing", "Desiged the system's database schema", "Developing and testing REST API endpoints for course management and registration workflows for staff users", "Developed 90% of the admin panel's client and server side, including staff management, course management, JWT authentication and audit logging features"],
        "stackTags": ["ReactJS", "Flask", "PostgreSQL", "Python", "SQLAlchemy", "Git" , "Postman", "Axios"]
    },
    {
        "date": "January 2025 - January 2026",
        "role": "Lead Developer",
        "positionType": "Capstone Project",
        "title": "KidDoReads",
        "client": "Colegio de San Juan de Letran Calamba - Basic Education Department",
        "orderedList": ["Designed full system architecture, including database schema, REST APIs, and user workflows, diagrams, and logic", "Developed role-based system used by 60 students, 1 teacher, and 1 assistant principal", "Integrated AI services using the OpenAI API, including a chatbot to assist teachers and text-to-speech for students", "Successfully deployed and maintained system for 5 weeks with stable performance and active usage"],
        "stackTags": ["HTML", "CSS", "JavaScript", "Python", "MySQL", "OpenAI", "Flask", "Speechgen.io", "DigitalOcean", "Git" ,"Thunder Client"]
    }
]