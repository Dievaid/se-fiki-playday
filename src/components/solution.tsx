import { useScrollRef } from "@/hooks/use-scroll";
import { FaBolt } from "react-icons/fa6";

export const Solution = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Solution");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaBolt />
                <p className="font-semibold" ref={ref}>A solution designed only for you.</p>
            </div>
            <div className="text-wrap w-[50%] sm:w-3/4 text-lg text-justify">
                PlayDay makes reserving sports fields for basketball, football, and more effortless, catering to both individuals and businesses. With flexible booking options, PlayDay fosters social interactions and team-building opportunities. Users can play with their own teams or join existing teams that need additional players, making it easier to meet new people and enjoy spontaneous matches. Whether planning an adventure outing, joining a local game, or engaging in professional training with certified coaches, PlayDay is your ultimate platform for seamless, activity-based networking and leisure.
            </div>
        </>
    );
}