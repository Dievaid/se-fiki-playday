import { useScrollRef } from "@/hooks/use-scroll";

export const FirstSale: React.FC = () => {
    const ref = useScrollRef<HTMLParagraphElement>("First Sale");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>MVP</p>
            </div>

            <p className="text-wrap w-1/2 text-lg text-justify">
            To validate PlayDay’s MVP and determine its potential to generate revenue, we conducted interviews with two primary groups: players and field owners. Following The Mom Test principles, we avoided pitching the app and instead focused on understanding their needs, challenges, and whether PlayDay fits into their existing processes.
            </p>

            <div className="flex items-center flex-col justify-center space-x-4 text-3xl gap-6">
                <p className="font-semibold">Engaging players</p>
                <p className="text-wrap w-1/2 text-lg text-justify">During one-on-one sessions with players, we let them explore the MVP while guiding them through key features. Rather than asking if they liked the app, we asked open-ended questions about how they currently organize games, what frustrations they face, and whether PlayDay could have solved these problems in the past.</p>
                <p className="text-wrap w-1/2 text-lg text-justify">The players responded enthusiastically, describing how the app simplifies the complexities of finding teammates, booking fields, and organizing activities. Many acknowledged that PlayDay addressed pain points they frequently encounter, and several expressed their willingness to use and recommend the platform. They also gave us valuable feedback, for example Robert talked about a rating for each player which can be seen by other players. It should also include a position and what type of player it is. Robert did say before recording "Wow, it would've been cool to have this app a while ago because I encountered this issue a few times" which meant that he really had a pain point which led us to question him about the future use of this application.</p>
            </div>

            <div className="flex items-center flex-col justify-center space-x-4 text-3xl gap-6">
                <p className="font-semibold">Speaking with Field Owners</p>
                <p className="text-wrap w-1/2 text-lg text-justify">These discussions naturally led to insights about PlayDay’s potential value. Owners were particularly intrigued by the idea of automated bookings and increased visibility for their fields. However, their questions focused on the financial model: How would PlayDay increase their profits? Would there be upfront costs or commissions? The curiosity (when we first interviewed one owner) indicated genuine interest and helped us reach this point, the MVP.</p>
            </div>

            <div className="flex items-center flex-col justify-center space-x-4 text-3xl gap-6">
                <p className="font-semibold">Insights and Proof</p>
                <p className="text-wrap w-1/2 text-lg text-justify">By framing our questions around existing problems and behaviors, we gained authentic insights that validate PlayDay’s value proposition. Players were enthusiastic about the MVP’s functionality, and many shared real-life scenarios where it would solve their frustrations. Field owners, while intrigued, emphasized the importance of clear financial incentives.</p>
                <p className="text-wrap w-1/2 text-lg text-justify">Evidence gathered includes recordings of player sessions showcasing their excitement and constructive feedback.</p>
                <a className="text-wrap text-lg text-justify hover:underline text-blue-600" target="_blank"
                    href="https://drive.google.com/drive/folders/1nqw893OfFpOOHQKp5OcYecwrEE5mMhO7?usp=drive_link">
                    Click here for some proof we collected.
                </a>
            </div>

            <div className="flex items-center flex-col justify-center space-x-4 text-3xl gap-6">
                <p className="font-semibold">Conclusion</p>
                <p className="text-wrap w-1/2 text-lg text-justify">Following The Mom Test principles allowed us to confirm that PlayDay addresses real pain points for players and field owners. Players were ready to adopt the app, while owners expressed interest with reservations about monetization details. These insights not only validate the MVP but also provide clear direction for refining our business model and expanding functionality to secure paying customers.</p>
            </div>
        </>
    );
}