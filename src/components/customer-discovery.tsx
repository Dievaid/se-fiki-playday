import { useScrollRef } from "@/hooks/use-scroll"
import { FaSearchengin } from "react-icons/fa6";

export const CustomerDiscovery = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Customer discovery")

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaSearchengin />
                <p className="font-semibold" ref={ref}>Customer discovery</p>
            </div>

            <div className="text-wrap text-justify w-[50%] space-y-10">
                <p>Our plan for customer discovery is to understand, in detail, the experiences and frustrations faced by potential users—both sports enthusiasts looking to join or organize activities and field owners managing rentals. We’ll focus on gathering real insights into the pain points they encounter with existing methods (like social media groups or direct bookings) to get a clear picture of what improvements they need.</p>
                <p>This approach ensures we’re not pitching PlayDay directly but instead learning about their specific needs and challenges.</p>
            </div>
        </>
    )
}