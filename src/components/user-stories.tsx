import { useScrollRef } from "@/hooks/use-scroll";

export const UserStories = () => {
    const ref = useScrollRef<HTMLParagraphElement>("User stories");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <p className="font-semibold" ref={ref}>User stories</p>
            </div>

			<div className="flex flex-wrap justify-center gap-4 mt-4">
				<div className="rounded-lg bg-gray-200 p-4 w-64 h-64 flex items-center justify-center">
					As a casual volleyball player, I want to see a list of available volleyball courts near me with transparent pricing, so that I can quickly book a field without the hassle of making phone calls.
				</div>
				<div className="rounded-lg bg-gray-200 p-4 w-64 h-64 flex items-center justify-center">
					As an organizer of a basketball game, I want to book a court for my team and invite players to join through the app, so that I can avoid double bookings and last-minute confusion.
				</div>
				<div className="rounded-lg bg-gray-200 p-4 w-64 h-64 flex items-center justify-center">
					As a solo player, I want to find games that need extra players, so that I can join and enjoy a spontaneous match.
				</div>
				
				<div className="w-full flex justify-center gap-4">
					<div className="rounded-lg bg-gray-200 p-4 w-64 h-64 flex items-center justify-center">
						As a beginner, I want to join a casual training group, so that I can learn the basics in a non-intimidating environment.
					</div>
					<div className="rounded-lg bg-gray-200 p-4 w-64 h-64 flex items-center justify-center">
						As a game organizer, I want to get notified if someone cancels or leaves the game, so that I can quickly find a replacement.
					</div>
				</div>
			</div>



        </>
    )
}