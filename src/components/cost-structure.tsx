import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollRef } from "@/hooks/use-scroll";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export const CostStructure = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Cost structure");

    return (
        <div className="w-full flex flex-col items-center space-y-10" ref={ref}>
            <div className="flex items-center space-x-4">
                <FaMoneyBillTransfer className="text-3xl"/>
                <p className="text-3xl font-semibold">Cost structure</p>
            </div>
            <div className="w-[80%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Laptops</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Advertising</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
                <Card className="flex justify-center">
                    <CardHeader>
                        <CardTitle>Infrastructure</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}