import { useScrollRef } from "@/hooks/use-scroll";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { generateItemsAsPNG } from "@/hooks/generate-items";

export const Mvp: React.FC = () => {
    const ref = useScrollRef<HTMLParagraphElement>("MVP");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>MVP</p>
            </div>

            <p className="text-wrap w-1/2 text-lg text-justify">
            To create a <b className="font-semibold">successful MVP</b>, it is essential to focus on implementing only the core functionalities of the application, allowing us to effectively test its potential and gather valuable feedback.
            </p>

            <img src="mvp.png" className="sm:w-[300px] md:w-[500px] lg:w-[700px]"/>

            <p className="text-wrap w-1/2 text-lg text-justify">
            To accomplish this, we conducted extensive <b className="font-semibold">research</b> and <b className="font-semibold">validation</b> efforts to gauge interest and ensure alignment with user expectations for our application.
            </p>

            <p className="text-wrap w-1/2 text-lg text-justify">
            During <b className="font-semibold">Milestones 1</b> and <b className="font-semibold">2</b>, we refined our concept, identified <b className="font-semibold">key customer segments</b>, and validated these segments to understand their needs. This analysis was critical, as their requirements will directly shape the application's development process.
            </p>

            <img src="mvp-circle.png" className="sm:w-[200px] md:w-[250px] lg:w-[400px]"/>

            <p className="text-wrap w-1/2 text-lg text-justify">
            PlayDay is designed for a wide range of users, welcoming anyone aged 14 and above, regardless of experience or skill level.
            </p>

            <div className="w-1/2 flex flex-col items-center">
                <p className="text-wrap text-lg text-justify self-start">
                When building the MVP, we took into account the following:
                </p>

                <ul className="pt-4 mr-4 list-disc">
                    <li>Users should be drawn to the platform through an engaging and visually appealing home page.</li>
                    <li>Users should be able to explore a list of available activities or events.</li>
                    <li>Event organizers should be able to create and post activities or events easily.</li>
                </ul>
            </div>

            <div className="flex flex-col w-[50%] items-center">
                <Carousel draggable={false} className="flex justify-evenly w-3/4">
                    <CarouselContent>
                        {generateItemsAsPNG('mvp', 9)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
}