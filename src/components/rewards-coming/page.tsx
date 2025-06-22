import Image from "next/image"
import { SquareArrowOutUpRight } from "lucide-react"

export function RewardsComing() {
	const cards = [
		{
			title: "Link your Delta SkyMiles®",
			description:
				"and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.¹",
			imgUrl: "/delta-skymiles.png",
		},
		{
			title: "Link your Bank of America",
			description:
				"eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.²",
			imgUrl: "/bank-of-america.png",
		},
		{
			title: "Link your Marriott Bonvoy®",
			description:
				"and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.³",
			imgUrl: "/marriott-logo.png",
		},
	]

	return (
		<section className="md:bg-[url(/rewards-coming-bg.png)] md:bg-cover md:px-8 md:py-6">
			<div className="bg-mint flex flex-col items-center gap-14 px-4 py-6 md:px-9">
				<div className="flex flex-col items-center gap-5 text-center">
					<h2 className="text-xl font-semibold md:text-3xl md:font-bold">
						Keep the Rewards Coming
					</h2>
					<p className="text-sm font-medium md:text-lg">
						The Rewards don&apos;t stop at your morning coffee. Join Starbucks®
						Rewards and unlock perks from our partners, all while earning more
						Stars.
					</p>
				</div>

				<div className="flex flex-col gap-10 md:flex-row">
					{cards.map((item) => {
						return (
							<div
								className="flex items-center gap-4 md:flex-col"
								key={item.title}
							>
								<div className="w-fit min-w-[120px]">
									<Image
										src={item.imgUrl}
										alt={item.title}
										width={210}
										height={210}
										quality={100}
									/>
								</div>
								<div className="flex flex-col text-sm md:items-center md:text-center md:text-lg">
									<span className="flex items-center gap-1 text-green-900 underline">
										{item.title} <SquareArrowOutUpRight size={12} />
									</span>
									<p>{item.description}</p>
								</div>
							</div>
						)
					})}
				</div>

				<button className="w-fit rounded-2xl bg-green-800 px-4 py-2 text-sm font-semibold text-white md:mt-5 md:rounded-3xl md:px-6 md:text-lg md:font-bold">
					Join Starbucks® Rewards
				</button>
			</div>
		</section>
	)
}
