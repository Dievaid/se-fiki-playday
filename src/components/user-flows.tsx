import { useScrollRef } from "@/hooks/use-scroll";
// import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";
// import { generateItems } from "@/hooks/generate-items";

export const UserFlows = () => {
    const ref = useScrollRef<HTMLParagraphElement>("User flows");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>User flow</p>
            </div>

            {/* <div className="flex items-center w-1/2 justify-evenly">
                <Carousel draggable={false} className="flex justify-evenly">
                    <CarouselContent className="w-1/2 items-center">
                        {generateItems("user-flows", 1)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div> */}
            <img src="/user-flows/1.jpg" onClick={() => window.open("/user-flows/1.jpg", "_blank")} alt="User flow" className="sm:w-[90%] md:w-[60%] lg:w-[50%]" />
        </>
    )
}