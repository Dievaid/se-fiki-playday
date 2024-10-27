import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const KeyMetrics = () => {
    return (
        <div className="w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card>
                <CardHeader>
                    <CardTitle>Location</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Interaction time</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Clicks</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}