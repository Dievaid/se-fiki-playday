import { useScrollRef } from "@/hooks/use-scroll";
import { FaBrain } from "react-icons/fa6";

export const ThinkingProcess = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Thinking process");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaBrain />
                <p className="font-semibold" ref={ref}>Thinking process</p>
            </div>

            <div className="text-wrap text-justify w-[50%] sm:w-3/4 space-y-10">
                <p>We realized we wanted an easy, hassle-free way to join or create games, unlike the difficult experiences from a few years ago. There was no single platform dedicated to centralizing sports activities and providing an organized system for both players and field owners, which led us to create PlayDay.</p>
                <p>PlayDay aims to make organizing and joining sports activities seamless. For people like us, sports enthusiasts who want to stay active and connect with others, it allows users to create activities, such as a hiking trip, a casual football match or even a LaserTag game. Once an activity is posted, others on the platform are notified, making it easy for interested people to join, chat, and coordinate. This solves the issue of having to rely on scattered groups or uncertain social apps threads where games were often canceled.</p>
                <p>On the other side, PlayDay also addresses field owners' needs by giving them a dedicated space to list their fields for rent. The platform manages the entire booking process, so that owners and players alike don’t have to deal with unresponsive communication or double-booking.</p>
            </div>
        </>
    )
}