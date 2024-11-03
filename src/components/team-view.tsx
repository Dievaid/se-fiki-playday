import { useScrollRef } from "@/hooks/use-scroll"
import { TeamCard } from "./team-card"
import { FaPeopleGroup } from "react-icons/fa6";

export const TeamView = () => {
    const ref = useScrollRef<HTMLDivElement>("Team and roles");

    return (
        <>
            <div className="text-3xl font-semibold flex items-center space-x-4" ref={ref}>
                <FaPeopleGroup />
                <p>This is our energetic team.</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[50px] gap-x-[5vw]">
                <TeamCard name="Sebastian Severin" desc="Project Manager" photo="/severin.sebastian.jpg" email="sebastian27severin@gmail.com"/>
                <TeamCard name="Iulia Olteanu" desc="UI/UX Analyst" photo="/olteanu.iulia.jpg" email="iuliaolteanu50@gmail.com"/>
                <TeamCard name="Bianca Șerban" desc="Business Analyst" photo="/serban.bianca.jpeg" email="bianca.serban2506@gmail.com"/>
                <TeamCard name="David Capragiu" desc="Software Engineer" photo="https://avatars.githubusercontent.com/u/63539529?v=4" email="david.capragiu@gmail.com"/>
                <TeamCard name="Ștefăniță Ioniță" desc="Software Engineer" photo="https://avatars.githubusercontent.com/u/72273318?v=4" email="stefanita.ionita0@gmail.com"/>
                <TeamCard name="Bogdan Brutaru" desc="Quality Assurance Engineer" photo="/brutaru.bogdan.jpg" email="brutaru.bogdan123@gmail.com"/>
            </div>
        </>
    )
}