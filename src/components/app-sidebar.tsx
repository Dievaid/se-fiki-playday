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

export const AppSidebar = () => {
    const { setSelection } = useContext(SelectionContext)!;

    const handler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setSelection(e.currentTarget.innerText);
    }

    return (
        <Sidebar className="lg:w-[310px] md:w-[220px] bg-[#cfe4e5] shadow-xl">
            <SidebarHeader>
                <SidebarGroupLabel className="text-xl mt-2">Startup Engineering - PlayDay</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-[#e8572f]">Milestone 1</SidebarGroupLabel>
                            <CollapsibleTrigger asChild className="">
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="p-4">
                                <CollapsibleContent className="text-sm space-y-2 p-4 text-[#2f2e2f]">
                                    <SidebarMenuItem onClick={handler}>Team and roles</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Problem</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Solution</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Customer segments</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Competition</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Key metrics</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Cost structure</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Revenue streams</SidebarMenuItem></CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
                <SidebarGroup>
                    <Collapsible>
                        <div className="flex w-full">
                            <SidebarGroupLabel className="text-lg text-[#e8572f]">Milestone 2</SidebarGroupLabel>
                            <CollapsibleTrigger asChild className="">
                                    <SidebarMenuButton>
                                        <img src="/arrow-list-expand-1.svg" className="mt-[0.2rem] size-[2rem]"></img>
                                    </SidebarMenuButton>
                            </CollapsibleTrigger>
                        </div>
                        <SidebarGroupContent>
                            <SidebarMenu className="p-4">
                                <CollapsibleContent className="text-sm space-y-2 p-4 text-[#2f2e2f]">
                                    <SidebarMenuItem onClick={handler}>Problem identification</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Thinking process</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Customer discovery</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Process details</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Insights impact</SidebarMenuItem>
                                    <SidebarMenuItem onClick={handler}>Are we ready for Customer Validation?</SidebarMenuItem>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </Collapsible>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};