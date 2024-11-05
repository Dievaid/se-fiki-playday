import { Separator } from "./ui/separator";

interface MilestoneSeparatorProps {
    milestone: number;
}

export const MilestoneSeparator: React.FC<MilestoneSeparatorProps> = ({ milestone }) => {
    return (
        <div className="w-[80%] flex items-center flex-col space-y-5">
            <Separator className="bg-slate-900"/>
            <p className="text-4xl font-semibold">Milestone {milestone}</p>
            <Separator className="bg-slate-900"/>
        </div>
    );
}