import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollRef } from "@/hooks/use-scroll";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export const RevenueStreams = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Revenue streams");

    return (
        <div className="w-full flex flex-col items-center space-y-10">
            <div className="flex items-center space-x-4 text-3xl">
                <FaMoneyBillTrendUp />
                <p className="text-3xl font-semibold" ref={ref}>Revenue streams</p>
            </div>

            <div className="w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Reservation fees</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Subscriptions</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Promotions</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}