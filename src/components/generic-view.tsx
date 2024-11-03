import { TeamView } from "./team-view";
import { Problem } from "./problem";
import { Solution } from "./solution";
import { CustomerSegments } from "./customer-segments";
import { Competition } from "./competition";
import { KeyMetrics } from "./key-metrics";
import { CostStructure } from "./cost-structure";
import { RevenueStreams } from "./revenue-streams";

export const GenericView = () => {
    const pageMap : Map<string, React.JSX.Element> = new Map([
        ["Team and roles", <TeamView />],
        ["Problem", <Problem />],
        ["Solution", <Solution />],
        ["Customer segments", <CustomerSegments />],
        ["Competition", <Competition />],
        ["Key metrics", <KeyMetrics />],
        ["Cost structure", <CostStructure />],
        ["Revenue streams", <RevenueStreams />]
    ]);

    return (
        <div className="w-full flex justify-center items-center p-10 flex-col space-y-20 mb-[15dvh] bg-[#f1e6dd]">
            {Array.from(pageMap.values())}
        </div>
    );
}