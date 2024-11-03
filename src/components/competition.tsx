import { useScrollRef } from "@/hooks/use-scroll";
import { FaRegThumbsUp } from "react-icons/fa6";

export const Competition = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Competition");
    
    return (
        <>
            <div className="flex items-center space-x-4">
                <FaRegThumbsUp className="text-3xl"/>
                <p className="text-3xl font-semibold" ref={ref}>Our competitors are strong. So are we.</p>
            </div>
            <div className="text-wrap w-[50%] text-lg text-justify">
                PlayDay faces competition from similar field reservation apps, such as Pitchfinder and TerenPlay, which provide users with options for locating and booking sports fields. Additionally, many individual venues and activity centers offer their own booking services through dedicated apps or websites, creating a fragmented experience for users who have to navigate multiple platforms. Furthermore, training sessions and group activities are often promoted on social media platforms, requiring users to follow various pages and accounts to stay updated. PlayDay consolidates these services into a single, user-friendly platform, offering a streamlined and accessible experience for all reservation needs.
            </div>
            <div className="text-wrap w-[50%] text-lg text-justify">
                PlayDay stands out by providing a centralized platform that simplifies the booking and team-finding process, creating a smoother and more enjoyable user experience. Unlike competitors, PlayDay offers a unique feature that helps users quickly find people to join incomplete teams, enabling games to happen faster and more reliably. Additionally, PlayDay’s social-oriented design encourages users to connect, network, and build friendships, making it more than just a booking app—it’s a community for sports and activity enthusiasts to socialize and engage with like-minded people.
            </div>
        </>
    )
}