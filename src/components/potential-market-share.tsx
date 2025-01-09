import { useScrollRef } from "@/hooks/use-scroll"
import { 
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";

export const PotentialMarketShare = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Potential Market Share");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>Potential Market Share</p>
            </div>

            <p className="text-wrap w-1/2 text-lg sm:w-3/4 text-justify">
            Estimating the market share in the Romanian sports field rental market is challenging due to limited publicly available data and the fragmented nature of the industry. Currently, TerenPlay holds a significant portion of the urban market, with an estimated 30% market share, driven by its established presence and user-friendly booking platform. Local facilities, which operate independently and rely on direct interactions or basic online visibility, dominate with approximately 50% market share, particularly in smaller towns and rural areas. Indirect competitors, including fitness centers, parks, and informal social media groups on platforms like Facebook and WhatsApp, account for the remaining 20% by offering alternatives for structured and casual activities.
            </p>

            <p className="text-wrap w-1/2 text-lg sm:w-3/4 text-justify">
            For PlayDay, entering this market with strategic marketing efforts could lead to steady growth. Starting with an annual Total Addressable Market (TAM) of €150M, calculated based on spending by 1.5 million active urban users, PlayDay could achieve the progression below.
            </p>

            <div className="w-3/4 flex flex-col items-center">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold">Year</TableHead>
                            <TableHead className="font-semibold">TAM (€M)</TableHead>
                            <TableHead className="font-semibold">Targeted Market Share (%)</TableHead>
                            <TableHead className="font-semibold">Revenue (€M)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>150</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>1.5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>165</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3.3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>181.5</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>5.4</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell>199.65</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>8.0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>5</TableCell>
                            <TableCell>219.62</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>11</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <p className="text-wrap w-1/2 text-lg sm:w-3/4 text-justify">
            In the first year, PlayDay could capture around 1% of the market (~15,000 active urban users), increasing to 5% (~75,000 users) by the fifth year as awareness and adoption rise. This projection assumes an average revenue of €2–€5 per booking with 10–15 bookings per year. While urban sports participation is still developing, the steady rise of structured sports activities in Romania provides a strong foundation for PlayDay’s growth potential.
            </p>

            <p className="text-wrap w-1/2 text-lg sm:w-3/4 text-justify">
            PlayDay's potential market share in Romania is promising, particularly in urban areas where structured sports activities are gaining popularity. Starting with an estimated Total Addressable Market (TAM) of €150M annually, PlayDay could achieve a 1% market share in its first year, representing approximately 15,000 active urban users and €1.5M in revenue. With strategic marketing and operational improvements, this share could grow to 5% within five years, reaching 75,000 active users and generating an estimated €11M annually. These projections are based on an average revenue of €2–€5 per booking and 10–15 bookings per user each year. While initial growth may be gradual due to market fragmentation and strong competition from platforms like TerenPlay and local facilities, PlayDay’s potential lies in its ability to centralize and streamline sports field bookings, gradually increasing adoption and capturing a larger share of the expanding market.
            </p>

            <p className="text-wrap w-1/2 text-lg sm:w-3/4 text-justify">
            In Romania, the average tennis field rental is around 60-80 RON and for a basketball/football field is around 500-750 RON, considering the rent would last for 2 hours. In order to reach our targets, the optimal fee for our service would range from 2€ to 5€ after several calculations. 
            </p>
        </>
    )
}