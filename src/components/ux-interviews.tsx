import { useScrollRef } from "@/hooks/use-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

const videoTags = () => {
    const files = [
        "videos/IMG_4304.MOV",
        "videos/IMG_4307.MOV",
        "videos/IMG_4309.MOV",
    ]

    const sayings = [
        "Pavel checks Google maps for a field located in parks, which are usually free. If the field is not available, he and his friends will search for alternatives free or not.",
        "Petru finds fields using Google maps and looks for one that is close to each of his friends. He is actively searching for a free field in a park and can delay the game if the field is too crowded. He also searched on Facebook about good rated fields, free or not.",
        "Matei tells us his experience with renting fields and how he searches for one. Google is his go to and appreciates a well rated field. We got valuable information from him to develop the details about the fields: distance (address is already present), the dimension and the quality (rating system required)."
    ]

    return files.map((file, idx) => {
        return <CarouselItem className="w-full flex flex-col items-center">
            <div className="ml-[18%]">
                <video key={`ux_${idx}`} src={file} controls className="w-[80%]"></video>
            </div>
            <p className="mt-4 text-wrap w-3/4">{sayings[idx]}</p>
        </CarouselItem>
    });
}

export const UxInterviews = () => {
    const ref = useScrollRef<HTMLParagraphElement>("UX interviews");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>UX interviews</p>
            </div>

            <div className="flex items-center">
                <Carousel draggable={false}>
                    <CarouselContent>
                        {videoTags()}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-10"/>
                    <CarouselNext className="absolute right-10"/>
                </Carousel>
            </div>

            <p className="text-wrap w-3/4">
            Matei, Petru and Pavel all have in common a few things. They are trying to search for free fields, which they want to be near them. They also end up with the same problem: if the field is busy, they will need to delay or cancel and will, eventually, end up looking to rent a field with money. In this case, PlayDay will be of great help.
            </p>
        </>
    )
}