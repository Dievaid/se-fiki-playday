import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CostStructure = () => {
    return (
        <div className="w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card>
                <CardHeader>
                    <CardTitle>Laptops</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Advertising</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Infrastructure</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}