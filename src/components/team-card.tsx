import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamCardProps {
    name: string;
    desc: string;
    photo: string;
}

export const TeamCard : React.FC<TeamCardProps> = (props) => {
    const { name, desc, photo } = props;
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <img className="w-[200px]" src={photo} alt={`${name}_${desc}`}/>
            </CardContent>
        </Card>
    );
}