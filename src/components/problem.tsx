import { useScrollRef } from "@/hooks/use-scroll";
import { FaSkullCrossbones } from "react-icons/fa6";

export const Problem = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Problem");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaSkullCrossbones />
                <p className="font-semibold" ref={ref}>You have problems... Not anymore.</p>
            </div>
            <div className="text-wrap w-[50%] text-lg text-justify">
                Sports fans frequently find it difficult to locate and reserve sports courts in today's hectic society. They have to cope with issues like conflicting reservations or not knowing where courts are open, which can result in arguments or wasted playing time. Even more difficult is the lack of a centralised venue for comments on the safety, upkeep, and quality of the courts. The challenges are exacerbated by unclear pricing and unpredictable availability. On top of that, sometimes there are not enough players to go play your favorite game, be it any kind of sports.
            </div>
        </>
    );
}