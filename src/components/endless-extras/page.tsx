import Image from "next/image"

export function EndlessExtras() {
	const cards = [
		{
			title: "Fun freebies",
			description:
				"Not only can you earn free food, drinks and more, look forward to a birthday treat on us.",
			imgUrl: "/1-fun-freebies.jpg",
		},
		{
			title: "Order & pay ahead",
			description:
				"Master the art of ordering ahead with saved favorites and payment methods.",
			imgUrl: "/2-order-and-pay-ahead.jpg",
		},
		{
			title: "Get to free faster",
			description:
				"Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.",
			imgUrl: "/3-get-to-free-faster.jpg",
		},
	]

	return (
		<section className="space-y-8 px-4 py-14 md:px-28 md:py-32">
			<div className="flex flex-col items-center justify-center gap-5">
				<h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
					Endless Extras
				</h2>
				<p className="text-center text-sm font-medium md:w-3xl md:text-lg">
					Joining Starbucks® Rewards means unlocking access to benefits like
					quick and easy ordering, tasty Rewards and—yes, free coffee.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-14 md:grid-cols-3">
				{cards.map((item) => {
					return (
						<div
							className="flex gap-4 md:flex-col md:items-center"
							key={item.title}
						>
							<div className="w-fit">
								<Image
									src={item.imgUrl}
									alt={item.title}
									width={120}
									height={120}
								/>
							</div>

							<div className="space-y-5 md:text-center">
								<h3 className="text-lg font-semibold md:text-2xl">
									{item.title}
								</h3>
								<p className="text-sm font-medium md:w-md md:text-base">
									{item.description}
								</p>
								<span className="cursor-pointer font-medium text-green-700 underline hover:no-underline">
									Learn more
								</span>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
