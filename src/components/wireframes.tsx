import { useScrollRef } from "@/hooks/use-scroll"
import { FaNetworkWired } from "react-icons/fa6";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { generateItems } from "@/hooks/generate-items";

export const Wireframes = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Wireframes");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaNetworkWired />
                <p className="font-semibold" ref={ref}>Wireframes</p>
            </div>

            <div className="flex items-center w-1/2 justify-evenly">
                <Carousel draggable={false} className="flex justify-evenly">
                    <CarouselContent className="w-1/2">
                        {generateItems("wireframes", 23)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}