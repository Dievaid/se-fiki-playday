import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const RevenueStreams = () => {
    return (
        <div className="w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card>
                <CardHeader>
                    <CardTitle>Reservation fees</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Subscriptions</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Promotions</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}