import { TeamCard } from "./team-card"

export const TeamView = () => {
    return (
        <>
            <p className="text-2xl font-semibold">This is our energetic team.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[50px] gap-x-[5vw]">
                <TeamCard name="Sebastian Severin" desc="Project Manager" photo="./src/assets/severin.sebastian.jpg"/>
                <TeamCard name="Iulia Olteanu" desc="UI/UX Analyst" photo="./src/assets/olteanu.iulia.jpg"/>
                <TeamCard name="Bianca Șerban" desc="Business Analyst" photo="./src/assets/serban.bianca.jpeg"/>
                <TeamCard name="David Capragiu" desc="Software Engineer" photo="https://avatars.githubusercontent.com/u/63539529?v=4"/>
                <TeamCard name="Ștefăniță Ioniță" desc="Software Engineer" photo="https://avatars.githubusercontent.com/u/72273318?v=4"/>
                <TeamCard name="Bogdan Brutaru" desc="Quality Assurance Engineer" photo="./src/assets/brutaru.bogdan.jpg"/>
            </div>
        </>
    )
}