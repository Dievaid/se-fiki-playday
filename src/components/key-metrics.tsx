import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollRef } from "@/hooks/use-scroll";
import { FaChartLine } from "react-icons/fa6";

export const KeyMetrics = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Key metrics");

    return (
        <div className="w-full flex flex-col items-center space-y-10">
            <div className="flex items-center space-x-4">
                <FaChartLine className="text-3xl"/>
                <p className="text-3xl font-semibold" ref={ref}>Key metrics</p>
            </div>
            <div className="w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Location</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Interaction time</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Clicks</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}