import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useContext } from "react";
import { SelectionContext } from "@/lib/selection-provider";

interface SidebarMenuItemProps {
    onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const CustomSidebarMenuItem : React.FC<React.PropsWithChildren<SidebarMenuItemProps>> = ({ children, onClick }) => {
    return (
        <div className="bg-white hover:bg-teal-300 hover:text-neutral-800 w-full rounded-sm text-md p-2">
            <SidebarMenuItem onClick={onClick} className="font-medium">{children}</SidebarMenuItem>
        </div>
    );
}

export const AppSidebar = () => {
    const { setSelection } = useContext(SelectionContext)!;

    const handler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setSelection(e.currentTarget.innerText);
    }

    return (
        <Sidebar className="lg:w-[310px] md:w-[220px] bg-teal-700 shadow-xl">
            <SidebarHeader className="bg-teal-700">
                <SidebarGroupLabel className="text-xl mt-2 text-white">Startup Engineering - PlayDay</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent className="bg-teal-700">
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-gray-50">Milestone 1</SidebarGroupLabel>
                            <CollapsibleTrigger asChild className="">
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="pl-4">
                                <CollapsibleContent className="text-sm space-y-2 pl-2 pt-1 pr-4 text-[#2f2e2f]">
                                    <CustomSidebarMenuItem onClick={handler}>Team and roles</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Problem</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Solution</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Customer segments</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Competition</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Key metrics</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Cost structure</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Revenue streams</CustomSidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-gray-50">Milestone 2</SidebarGroupLabel>
                            <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="pl-4">
                                <CollapsibleContent className="text-sm space-y-2 pl-2 pt-1 pr-4 text-[#2f2e2f]">
                                    <CustomSidebarMenuItem onClick={handler}>Problem identification</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Thinking process</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Customer discovery</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Process details</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Insights impact</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Are we ready for Customer Validation?</CustomSidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-gray-50">Milestone 3</SidebarGroupLabel>
                            <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="pl-4">
                                <CollapsibleContent className="text-sm space-y-2 pl-2 pt-1 pr-4 text-[#2f2e2f]">
                                    <CustomSidebarMenuItem onClick={handler}>Wireframes</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Landing page</CustomSidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-gray-50">Milestone 4</SidebarGroupLabel>
                            <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="pl-4">
                                <CollapsibleContent className="text-sm space-y-2 pl-2 pt-1 pr-4 text-[#2f2e2f]">
                                    <CustomSidebarMenuItem onClick={handler}>User persona</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Interviews</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>User stories</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>User flows</CustomSidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-gray-50">Milestone 5</SidebarGroupLabel>
                            <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="pl-4">
                                <CollapsibleContent className="text-sm space-y-2 pl-2 pt-1 pr-4 text-[#2f2e2f]">
                                    <CustomSidebarMenuItem onClick={handler}>Marketing</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Analytics</CustomSidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-gray-50">Milestone 6</SidebarGroupLabel>
                            <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="pl-4">
                                <CollapsibleContent className="text-sm space-y-2 pl-2 pt-1 pr-4 text-[#2f2e2f]">
                                    <CustomSidebarMenuItem onClick={handler}>Market Size</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Market Competition</CustomSidebarMenuItem>
                                    <CustomSidebarMenuItem onClick={handler}>Potential Market Share</CustomSidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-gray-50">Milestone 7</SidebarGroupLabel>
                            <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="pl-4">
                                <CollapsibleContent className="text-sm space-y-2 pl-2 pt-1 pr-4 text-[#2f2e2f]">
                                    <CustomSidebarMenuItem onClick={handler}>MVP</CustomSidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};