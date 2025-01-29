interface CardProps{
    title: string;
    video: string;

}

export default function ProjectCard({title, video}: CardProps){
    return (
        <div className="h-28 w-24 bg-white">
            <div>
                <span>{video}</span>
            </div>
            <span>{title}</span>
        </div>
    )
}