import { useScrollRef } from "@/hooks/use-scroll";

export const CustomerSegments = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Customer segments");

    return (
        <>
            <p className="text-2xl font-semibold" ref={ref}>A few details about our potential customers.</p>
            <p className="text-wrap w-[50%] text-lg text-justify">
                PlayDay is designed for a wide range of users, welcoming anyone aged 14 and above, regardless of experience or skill level. The platform offers something for everyone—from casual players who enjoy social matches to competitive athletes looking for organized games with skilled opponents. Specialized training sessions led by certified professionals also cater to those interested in advancing their skills. Additionally, PlayDay serves event organizers and businesses by providing options for team-building events, adventure activities, and other engaging outings. With its broad appeal, PlayDay is the ideal platform for sports enthusiasts, social players, and organized groups alike.
            </p>
        </>
    );
}