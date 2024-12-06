import { useScrollRef } from "@/hooks/use-scroll";

export const UserPersona = () => {
    const ref = useScrollRef<HTMLParagraphElement>("User persona");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>User persona</p>
            </div>

            <img src="persona-se.jpg" onClick={() => window.open("persona-se.jpg", "_blank")} alt="User persona" className="sm:w-[90%] md:w-[60%] lg:w-[50%]" />
            <img src="persona-se-copy.jpg" onClick={() => window.open("persona-se-copy.jpg", "_blank")} alt="User persona" className="sm:w-[90%] md:w-[60%] lg:w-[50%]" />
        </>
    )
}