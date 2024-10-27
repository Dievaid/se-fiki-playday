import { createContext, useState } from "react";

interface SelectionContextProps extends React.PropsWithChildren {
    selection: string;
    setSelection: (selection: string) => void;
}

export const SelectionContext = createContext<SelectionContextProps | null>(null);

export const SelectionProvider : React.FC<React.PropsWithChildren> = ({children}) => {
    const [selection, setSelection] = useState<string>("");

    return (
        <SelectionContext.Provider value={{selection, setSelection}}>
            {children}
        </SelectionContext.Provider>
    );
}