import { useScrollRef } from "@/hooks/use-scroll";
import { Card, CardContent, CardTitle } from "./ui/card";

export const MarketCompetition = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Market Competition");
    
    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>Market Competition</p>
            </div>

            <div className="text-wrap w-3/4 text-lg text-center grid lg:grid-cols-3 md:grid-cols-1 gap-4">
                <Card className="p-6 pb-2 space-y-4 flex flex-col items-center">
                    <CardTitle>SportBooking</CardTitle>
                    <CardContent>
                    An online platform that allows users to search for and book various sports facilities across Romania.
                    </CardContent>
                </Card>
                <Card className="p-6 pb-2 space-y-4 flex flex-col items-center">
                    <CardTitle>KICKR</CardTitle>
                    <CardContent>
                    A mobile application available on Android and iOS, enabling users to easily book sports fields, create games, or join existing ones. 
                    </CardContent>
                </Card>
                <Card className="p-6 pb-2 space-y-4 flex flex-col items-center">
                    <CardTitle>TerenPlay</CardTitle>
                    <CardContent>
                    A Romanian platform specializing in connecting users to sports facilities, offering online booking for multiple sports fields, and currently holding a significant market share in urban areas.
                    </CardContent>
                </Card>
            </div>

            <p className="text-wrap lg:w-1/2 md:w-3/4 sm:w-3/4 text-lg text-justify">
            Additionally, local facilities often operate independently, renting football and other courts directly to users through telephone or face-to-face interactions.
            Indirect competition arises from fitness centers, which provide structured indoor exercise alternatives, and parks and public spaces, serving as free options for casual sports activities.
            </p>

            <p className="text-wrap lg:w-1/2 md:w-3/4 sm:w-3/4 text-lg text-justify">
            Furthermore, social media groups on platforms like Facebook and WhatsApp facilitate informal sports gatherings, allowing individuals to organize games without formal booking systems.
            For instance, the Bucharest Sports & Games Group on InterNations connects like-minded individuals for various sports activities. 
            </p>

            <p className="text-wrap lg:w-1/2 md:w-3/4 text-lg text-justify">
            Similarly, <b>Meetup.com</b> hosts several sports and recreation groups in Romania, enabling enthusiasts to arrange and participate in sports events. 
            These informal channels can impact the adoption of formal booking platforms, as they offer alternative means for organizing sports activities.
            Understanding this competitive landscape is crucial for us in order to identify opportunities for differentiation and to develop strategies that address both the direct and indirect competitors in the market.
            </p>
        </>
    )
}