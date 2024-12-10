import { useScrollRef } from "@/hooks/use-scroll";

const videoTags = () => {
    const files = [
        "https://www.youtube.com/embed/f5j2_EjFFOc?si=P6A2BCdBk2XU8Wmj",
        "https://www.youtube.com/embed/Pt-0QI3Z7l8?si=fW6DAL1kB0elcoJL",
        "https://www.youtube.com/embed/JbbbyyV5PYQ?si=OXl22DKWLBpxcYrO",
    ]

    const sayings = [
        "Pavel checks Google maps for a field located in parks, which are usually free. If the field is not available, he and his friends will search for alternatives free or not.",
        "Petru finds fields using Google maps and looks for one that is close to each of his friends. He is actively searching for a free field in a park and can delay the game if the field is too crowded. He also searched on Facebook about good rated fields, free or not.",
        "Matei tells us his experience with renting fields and how he searches for one. Google is his go to and appreciates a well rated field. We got valuable information from him to develop the details about the fields: distance (address is already present), the dimension and the quality (rating system required)."
    ]

    return files.map((file, idx) => {
        return <div className="flex flex-col items-center w-1/2">
            <iframe width="560" height="315"
                src={file}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen />
            <p className="mt-4 text-wrap">{sayings[idx]}</p>
        </div>
    });
}

export const UxInterviews = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Interviews");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>Interviews</p>
            </div>

            <div className="flex gap-12 flex-col items-center">
                {videoTags()}
            </div>

            <p className="text-wrap w-3/4">
                Matei, Petru and Pavel all have in common a few things. They are trying to search for free fields, which they want to be near them. They also end up with the same problem: if the field is busy, they will need to delay or cancel and will, eventually, end up looking to rent a field with money. In this case, PlayDay will be of great help.
            </p>
        </>
    )
}