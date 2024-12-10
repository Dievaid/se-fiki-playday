import { generateItems } from "@/hooks/generate-items";
import { useScrollRef } from "@/hooks/use-scroll";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { FaMoneyBills } from "react-icons/fa6";

export const Marketing = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Marketing");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaMoneyBills />
                <p className="font-semibold" ref={ref}>Marketing</p>
            </div>

            <p className="text-xl text-wrap w-1/2 text-justify">
                Our marketing campaign leveraged Facebook and WhatsApp to promote PlayDay. WhatsApp emerged as the most effective platform, thanks to its speed and reliability, allowing us to connect directly with our target audience. As seen in the screenshots, people engaged with the messages and posts, validating their relevance and appeal. However, our efforts on Facebook were hindered by post deletions, limiting their overall impact despite initial reactions.
            </p>

            <div className="flex flex-col w-[50%] items-center">
                <Carousel draggable={false} className="flex justify-evenly w-3/4">
                    <CarouselContent>
                        {generateItems('marketing-facebook', 6)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <Carousel draggable={false} className="flex justify-evenly w-3/4">
                    <CarouselContent className="flex items-center">
                        <CarouselItem>
                            <img onClick={() => window.open("/marketing-wp/wp-1.png", "_blank")} src="/marketing-wp/wp-1.png" width={1000} alt="Facebook post" />
                        </CarouselItem>
                        <CarouselItem>
                            <img onClick={() => window.open("/marketing-wp/wp-2.png", "_blank")} src="/marketing-wp/wp-2.png" width={1000} alt="Facebook post" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <Carousel draggable={false} className="flex justify-evenly w-3/4 mt-12">
                    <CarouselContent className="flex items-center">
                        <CarouselItem>
                            <img onClick={() => window.open("/marketing-fail/fail-1.png", "_blank")} src="/marketing-fail/fail-1.png" width={1000} alt="Facebook post" />
                        </CarouselItem>
                        <CarouselItem>
                            <img onClick={() => window.open("/marketing-fail/fail-2.png", "_blank")} src="/marketing-fail/fail-2.png" width={1000} alt="Facebook post" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
            <p className="text-xl text-wrap w-1/2 text-justify mt-12">
                We also created a newsletter to keep users engaged and informed. To encourage signups, we implemented a "Get Started" button on the platform, which collects email addresses from interested users seamlessly. This approach has been effective in building a growing subscriber base, despite initial tracking issues.
            </p>

            <div className="flex flex-col items-center w-3/4 p-4">
                <p className="text-2xl font-semibold">Proof of work</p>
                <a
                    href="https://pastebin.com/Zv00e9Wq"
                    target="blank"
                    className="mt-4 hover:text-blue-500 hover:underline text-xl">
                        Click here to browse some of the posts we made along the way.
                </a>
            </div>
        </>
    )
}