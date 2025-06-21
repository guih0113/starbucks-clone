import { Button } from "./button"
import Image from "next/image"

export function GetFavorites() {
	return (
		<section>
			<div className="bg-foam space-y-6 pt-8 pb-4 text-center md:space-y-14 md:pt-12">
				<h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
					Get your favorites for free
				</h2>
				<div className="flex w-full justify-around text-xl font-semibold md:justify-center md:gap-16 md:text-2xl md:tracking-wide">
					<Button number={25} />
					<Button number={100} />
					<Button number={200} />
					<Button number={300} />
					<Button number={400} />
				</div>
			</div>

			<div className="bg-mint grid grid-cols-1 items-center justify-center gap-7 px-6 py-8 text-center md:grid-cols-2 md:text-left lg:px-64 xl:px-88">
				<div className="w-fit">
					<Image
						src="/reward-tier-1.png"
						alt="Rewards Tier"
						width={380}
						height={380}
						quality={100}
					/>
				</div>
				<div className="flex flex-col gap-6">
					<h3 className="text-lg font-semibold md:text-2xl md:font-bold">
						Customize your drink
					</h3>
					<p className="text-sm font-medium md:w-md md:text-lg">
						Make your drink just right with an extra espresso shot or a dash of
						your favorite syrup.
					</p>
				</div>
			</div>
		</section>
	)
}
