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
        <Card className="flex items-center flex-col bg-[#eee9ef] shadow-lg border-3 border-[#b1a6ac] border-solid border-x-2">
            <CardHeader className="self-start">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <img className="w-[200px]" src={photo} alt={`${name}_${desc}`}/>
            </CardContent>
            <CardFooter className="flex justify-center">
                <a className="hover:underline hover:text-blue-400" href={`mailto:${email}`}>{email}</a>
            </CardFooter>
        </Card>
    );
}