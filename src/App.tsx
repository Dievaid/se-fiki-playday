import { AppSidebar } from "./components/app-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SelectionProvider } from "@/lib/selection-provider";
import { GenericView } from "./components/generic-view";

export const App = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <SelectionProvider>
        <AppSidebar />
        <GenericView />
      </SelectionProvider>
    </SidebarProvider>
  );
}

