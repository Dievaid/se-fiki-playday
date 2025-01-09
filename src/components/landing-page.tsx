import { useScrollRef } from "@/hooks/use-scroll";
import { FaFirefox } from "react-icons/fa6";

export const LandingPage = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Landing page");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaFirefox />
                <p className="font-semibold" ref={ref}>Landing page</p>
            </div>
            <div className="text-xl font-[400] items-center flex flex-col gap-2">
                <p>You can catch a glimpse of our landing page right from this page.</p>
                <p>You can click <a href="https://introplayday.vercel.app/" className="text-blue-600 dark:text-blue-500 hover:underline">here</a> for the full landing page.</p>
            </div>
            <div className="flex items-center w-[90%]">
                <iframe
                    width="960"
                    height="450"
                    src="https://introplayday.vercel.app/"
                    title="PlayDay Landing Page"
                    allowFullScreen
                    className="block m-auto"
                />
            </div>
        </>
    );
}