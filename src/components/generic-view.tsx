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
import { SidebarTrigger } from "./ui/sidebar";
import { Wireframes } from "./wireframes";
import { LandingPage } from "./landing-page";
import { UserPersona } from "./user-persona";
import { UxInterviews } from "./ux-interviews";
import { UserStories } from "./user-stories";
import { UserFlows } from "./user-flows";

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
        ["3", <MilestoneSeparator milestone={3} />],
        ["Wireframes", <Wireframes />],
        ["Landing page", <LandingPage />],
        ["4", <MilestoneSeparator milestone={4} />],
        ["User persona", <UserPersona />],
        ["UX interviews", <UxInterviews />],
        ["User stories", <UserStories />],
        ["User flows", <UserFlows />],
    ]);

    return (
        <div className="w-full flex justify-center items-center p-10 flex-col space-y-20 mb-[15dvh]">
            <SidebarTrigger className="fixed top-5 left-10"/>
            {Array.from(pageMap.values())}
        </div>
    );
}