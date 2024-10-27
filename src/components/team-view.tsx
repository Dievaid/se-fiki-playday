import { TeamCard } from "./team-card"

export const TeamView = () => {
    return (
        <>
            <p className="text-2xl font-semibold">This is our energetic team.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[50px] gap-x-[5vw]">
                <TeamCard name="Sebastian Severin" desc="Project Manager" photo="/severin.sebastian.jpg" email="sebastian27severin@gmail.com"/>
                <TeamCard name="Iulia Olteanu" desc="UI/UX Analyst" photo="/olteanu.iulia.jpg" email="iuliaolteanu50@gmail.com"/>
                <TeamCard name="Bianca Șerban" desc="Business Analyst" photo="/serban.bianca.jpeg" email="bianca.serban2506@gmail.com"/>
                <TeamCard name="David Capragiu" desc="Software Engineer" photo="https://avatars.githubusercontent.com/u/63539529?v=4" email="david.capragiu@gmail.com"/>
                <TeamCard name="Ștefăniță Ioniță" desc="Software Engineer" photo="https://avatars.githubusercontent.com/u/72273318?v=4" email="stefanita.ionita0@gmail.com"/>
                <TeamCard name="Bogdan Brutaru" desc="Quality Assurance Engineer" photo="/brutaru.bogdan.jpg" email="brutaru_bogdan11@yahoo.com"/>
            </div>
        </>
    )
}