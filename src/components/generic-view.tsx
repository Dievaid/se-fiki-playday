import { TeamView } from "./team-view";
import { Problem } from "./problem";
import { Solution } from "./solution";
import { CustomerSegments } from "./customer-segments";
import { Competition } from "./competition";
import { KeyMetrics } from "./key-metrics";
import { CostStructure } from "./cost-structure";
import { RevenueStreams } from "./revenue-streams";
import { ProblemIdentification } from "./problem-identification";
import { ThinkingProcess } from "./thinking-process";
import { CustomerDiscovery } from "./customer-discovery";
import { ProcessDetails } from "./process-details";
import { InsightsImpact } from "./insights-impact";
import { CustomerValidation } from "./customer-validation";
import { MilestoneSeparator } from "./milestone-separator";

export const GenericView = () => {
    const pageMap : Map<string, React.JSX.Element> = new Map([
        ["1", <MilestoneSeparator milestone={1} />],
        ["Team and roles", <TeamView />],
        ["Problem", <Problem />],
        ["Solution", <Solution />],
        ["Customer segments", <CustomerSegments />],
        ["Competition", <Competition />],
        ["Key metrics", <KeyMetrics />],
        ["Cost structure", <CostStructure />],
        ["Revenue streams", <RevenueStreams />],
        ["2", <MilestoneSeparator milestone={2} />],
        ["Problem identification", <ProblemIdentification />],
        ["Thinking process", <ThinkingProcess />],
        ["Customer discovery", <CustomerDiscovery />],
        ["Process details", <ProcessDetails />],
        ["Insights impact", <InsightsImpact />],
        ["Are we ready for Customer Validation?", <CustomerValidation />],
    ]);

    return (
        <div className="w-full flex justify-center items-center p-10 flex-col space-y-20 mb-[15dvh] bg-[#f1e6dd]">
            {Array.from(pageMap.values())}
        </div>
    );
}