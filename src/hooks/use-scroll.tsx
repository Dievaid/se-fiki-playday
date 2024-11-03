import { SelectionContext } from "@/lib/selection-provider";
import { createRef, useContext, useEffect } from "react";

export function useScrollRef<T extends HTMLElement>(name: string) {
    const { selection } = useContext(SelectionContext)!;

    const ref = createRef<T>();

    useEffect(() => {
        if (selection === name) {
            ref.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [selection]);

    return ref;
}