import { Card } from "./card"

export function SectionSecondary() {
	return (
		<section className="py-8 px-6 md:py-16 md:px-26">
			<div className="flex flex-col items-center justify-center text-center gap-10 text-darkgreen">
				<div className="space-y-4">
					<h2 className="font-semibold text-xl md:text-3xl md:font-bold">
						Getting started is easy
					</h2>
					<p className="text-sm font-medium md:text-lg">
						Earn Stars and get rewarded in a few easy steps.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<Card
						number={1}
						title="Download the Starbucks® app"
						description="Join in the app to get access to the full range of Starbucks® Rewards benefits. You can also join online."
					/>
					<Card
						number={2}
						title="Order and pay how you'd like"
						description="Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways. Learn how"
					/>
					<Card
						number={3}
						title="Earn Stars, get Rewards"
						description="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
					/>
				</div>
			</div>
		</section>
	)
}
