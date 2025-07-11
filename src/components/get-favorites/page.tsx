"use client"
import { useState } from "react"
import { Button } from "./button"
import { Content } from "./content"

const content = [
	{
		imgUrl: "/reward-tier-1.png",
		title: "Customize your drink",
		description:
			"Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
	},
	{
		imgUrl: "/reward-tier-2.png",
		title:
			"Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
		description:
			"Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
	},
	{
		imgUrl: "/reward-tier-3.png",
		title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
		description:
			"Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
	},
	{
		imgUrl: "/reward-tier-4.png",
		title: "Sandwich, protein box or at-home coffee",
		description:
			"Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
	},
	{
		imgUrl: "/reward-tier-5.png",
		title: "Select Starbucks® merchandise",
		description:
			"Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
	},
]

export function GetFavorites() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleButtonClick = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<section>
			<div className="bg-foam space-y-6 py-8 text-center md:space-y-14 md:pt-12">
				<h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
					Get your favorites for free
				</h2>
				<div className="flex w-full justify-around text-xl font-semibold md:justify-center md:gap-16 md:text-3xl md:tracking-wide">
					{content.map((_item, index) => (
						<div key={index} className="relative flex justify-center">
							<Button
								number={(index + 1) * 100}
								onClick={() => handleButtonClick(index)}
							/>
							{activeIndex === index && (
								<div className="absolute top-14 h-1 w-15 bg-green-800 transition-all duration-300 ease-in-out md:top-16 md:h-1.5 md:w-28"></div>
							)}
						</div>
					))}
				</div>
			</div>
			<Content
				title={content[activeIndex].title}
				description={content[activeIndex].description}
				imgUrl={content[activeIndex].imgUrl}
			/>
		</section>
	)
}
