import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamCardProps {
    name: string;
    desc: string;
    photo: string;
    email: string;
}

export const TeamCard : React.FC<TeamCardProps> = (props) => {
    const { name, desc, photo, email } = props;
    
    return (
        <Card className="flex items-center flex-col bg-gradient-to-b from-gray-50 from-65% to-emerald-300 border-solid">
            <CardHeader className="self-start">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <img className="w-[200px] rounded-[6rem]" src={photo} alt={`${name}_${desc}`}/>
            </CardContent>
            <CardFooter className="flex justify-center">
                <a className="font-[400] hover:underline hover:text-violet-700" href={`mailto:${email}`}>{email}</a>
            </CardFooter>
        </Card>
    );
}