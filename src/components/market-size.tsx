import { useScrollRef } from "@/hooks/use-scroll";

export const MarketSize = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Market Size");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>Market Size</p>
            </div>
            <p className="text-wrap w-[50%] text-lg text-justify">
            In Romania, approximately 46% of the population engages in sports activities weekly, but only 14% participate in structured sports at fitness facilities or organized sports spaces. This subset, approximately 2.66 million people, represents the primary target audience for PlayDay's sports field rental services. Focusing on urban areas, which account for 57% of the population, narrows the potential market to around 1.5 million users who are more likely to access rentable sports fields. Sub-markets include football fields, driven by the sport's widespread popularity; tennis and multi-purpose courts, which attract urban youth with diverse sporting interests; and unique event offerings like laser tag or karting, providing fresh, engaging experiences outside daily routines.
            </p>
        </>
    );
}