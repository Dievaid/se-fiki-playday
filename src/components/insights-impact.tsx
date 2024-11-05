import { useScrollRef } from "@/hooks/use-scroll";

import { FaArrowTrendUp } from "react-icons/fa6";

export const InsightsImpact = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Insights impact");
    
    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaArrowTrendUp />
                <p className="font-semibold" ref={ref}>Insights impact</p>
            </div>

            <div className="text-wrap text-justify w-[50%] space-y-10">
                <p>These insights reveal an opportunity for a centralized platform where field availability can be monitored in real-time. Such a solution would eliminate the back-and-forth calling process, giving users immediate feedback on availability and a way to book without delay.</p>
                <p>A platform like PlayDay could help standardize expectations by enabling field owners to provide verified facility information, pricing transparency, and user reviews. For this to happen we can implement a rating system for both the customers and the owners/fields. This would give prospective renters confidence that they’re getting exactly what they pay for, increasing satisfaction and repeat bookings.</p>
                <p>PlayDay could become the go-to platform for finding reliable last-minute substitutes. A team-matching feature that caters to users seeking immediate replacements would help organizers maintain a steady roster, even if some members drop out. This would not only streamline the game-organizing process but also foster a dependable community of players.</p>
                <p>We got to test the problem and found out interesting things about the customers as we can see previously. We learned that the problem is valid and that there are pains for the customers.</p>
            </div>
        </>
    );
}