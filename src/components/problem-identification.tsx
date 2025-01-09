import { generateItems } from "@/hooks/generate-items";
import { useScrollRef } from "@/hooks/use-scroll";

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const ProblemIdentification = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Problem identification");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>Problem identification</p>
            </div>

            <div className="text-wrap text-justify w-[50%] sm:w-3/4 space-y-10">
                <p>When we first moved to Bucharest for university, we found ourselves in a totally new city with barely any friends. We wanted to keep up with our active lifestyles, meet new people, and connect with others who shared our interests. But it felt like we hit a dead end. Finding options to join a team game or activity was surprisingly difficult.</p>
                <p>We tried joining some games organized through WhatsApp and Facebook groups, but it was always messy. Half the time, games would get canceled because not enough players could make it. We noticed the same frustrations on social platforms like Reddit and Facebook where everyone was facing similar issues.</p>
                <p>Booking fields was another headache. Sometimes field owners wouldn’t answer calls, or worse, they’d double-book the space. Even when we managed to secure a field, we were never totally sure it’d be available when we arrived. On top of that, it was difficult to collect payments from everyone. The whole process just felt unreliable and way too complicated for something as simple as organizing a game.</p>

                <Carousel draggable={false}>
                    <CarouselContent>
                        {generateItems("proof", 18)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
};