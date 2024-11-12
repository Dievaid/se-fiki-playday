import { RefObject, useEffect, useMemo, useState } from "react";

export default function useInScreen(ref: RefObject<Element>) : boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref]);

    useEffect(() => {
        observer.observe(ref.current!);
        return () => { observer.disconnect(); };
    }, []);

    return isIntersecting;
}