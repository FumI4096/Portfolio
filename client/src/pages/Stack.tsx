import { useRef } from "react";
import { CarouselRowProps } from "../assets/constants/languages.ts";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { backEndIcons, frontEndIcons, toolIcons } from "../assets/constants/languages";

import LanguageIcon from "../components/LanguageIcons";

// Reusable carousel row component
function CarouselRow({ icons, direction = "forward" }: CarouselRowProps) {
    const looped = [...icons, ...icons];

    const autoScroll = useRef(
        AutoScroll({ speed: 1, direction, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true, align: "start" },
        [autoScroll.current]
    );

    return (
        <div className="relative w-full flex">
            {/* Left blur */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none
                            bg-gradient-to-r from-primary-gray-2 to-transparent" />
            {/* Right blur */}
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none
                            bg-gradient-to-l from-primary-gray-2 to-transparent" />

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {looped.map(({ icon, iconLanguage }, i) => (
                        <div key={i} className="flex-none ml-10 max-md:ml-6 max-sm:ml-4">
                            <LanguageIcon icon={icon} iconLanguage={iconLanguage} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Stack() {
    return (
        <section
            id="services"
            className="h-auto flex items-center justify-between flex-col gap-10"
        >
            <CarouselRow icons={frontEndIcons} />
            <CarouselRow icons={backEndIcons} direction="backward" />
            <CarouselRow icons={toolIcons} />
        </section>
    );
}