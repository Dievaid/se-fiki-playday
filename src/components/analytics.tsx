import { useScrollRef } from "@/hooks/use-scroll";
import { FileChartLine } from "lucide-react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { generateItemsAsPNG } from "@/hooks/generate-items";

export const Analytics = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Analytics");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FileChartLine />
                <p className="font-semibold" ref={ref}>Analytics</p>
            </div>

            <img width={200} src="hog.png" alt="hog" />

            <div className="flex flex-col w-[50%] items-center">
                <Carousel>
                    <CarouselContent>
                        {generateItemsAsPNG("posthog", 5)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <p className="text-xl text-wrap w-1/2 sm:w-3/4 text-justify">
                Our analytics show engagement from users across cities and countries, with traffic driven by search engines and direct links—likely from WhatsApp due to its campaign success. Of 75 pageviews, 32 clicked “Get Started,” and 10 subscribed to emails, though a tracking error missed data for four days. Despite this, a 42% interaction rate from views to clicks highlights strong interest. Optimizing the user funnel and fixing analytics will help refine acquisition and engagement efforts.
            </p>
        </>
    );
}