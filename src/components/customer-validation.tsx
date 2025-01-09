import { useScrollRef } from "@/hooks/use-scroll"

import { FaCheck } from "react-icons/fa6";

export const CustomerValidation = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Are we ready for Customer Validation?");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaCheck />
                <p className="font-semibold" ref={ref}>Are we truly ready for Customer Validation?</p>
            </div>

            <div className="text-wrap text-justify w-[50%] sm:w-3/4 space-y-10">
                <p>Yes, we are ready to move to the Customer Validation stage. Our discussions with potential users have revealed significant pain points related to organizing team sports, such as difficulties in finding players, securing venues, and navigating inefficient booking processes. We have a clear understanding of how PlayDay can address these issues, offering solutions that resonate with the needs expressed by users.</p>
                <p>Additionally, we’ve segmented our target audience by age and activity level, allowing us to tailor our approach effectively. Feedback from initial conversations indicates a genuine interest in a platform that simplifies the organization of sports activities, reinforcing our confidence in proceeding. Coupled with preliminary market research indicating a growing demand for digital solutions in sports coordination, we believe we have a solid foundation to enter Customer Validation and test our selling assumptions.</p>
            </div>
        </>
    )
}