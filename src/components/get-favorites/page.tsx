import Image from "next/image"
import { Button } from "./button"

export function GetFavorites() {
	return (
		<section>
			<div className="bg-foam space-y-6 py-8 text-center md:space-y-14 md:pt-12">
				<h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
					Get your favorites for free
				</h2>
				<div className="flex w-full justify-around text-xl font-semibold md:justify-center md:gap-16 md:text-3xl md:tracking-wide">
					<Button number={25} />
					<Button number={100} />
					<Button number={200} />
					<Button number={300} />
					<Button number={400} />
				</div>
			</div>

			<div className="bg-mint flex flex-col items-center justify-center gap-8 px-6 py-8 text-center lg:flex-row">
				<div className="flex justify-center">
					<Image
						src="/reward-tier-1.png"
						alt="Rewards Tier"
						width={380}
						height={380}
						quality={100}
					/>
				</div>
				<div className="flex w-fit flex-col gap-6">
					<h3 className="text-center text-lg font-semibold md:text-2xl md:font-bold lg:text-left">
						Customize your drink
					</h3>
					<p className="text-sm font-medium md:w-md md:text-lg lg:text-left">
						Make your drink just right with an extra espresso shot or a dash of
						your favorite syrup.
					</p>
				</div>
			</div>
		</section>
	)
}
