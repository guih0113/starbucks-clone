import Image from "next/image"

export function SectionMain() {
	return (
		<section className="bg-cream md:h-[500px]">
			<div className="grid h-full grid-cols-1 md:grid-cols-2 lg:px-12">
				<div className="text-darkgreen flex flex-col items-center justify-center gap-5 px-4 py-6 text-center md:items-start md:px-20">
					<h2 className="text-3xl font-bold md:text-left md:text-6xl md:font-semibold">
						It’s a great day for <br /> free coffee
					</h2>
					<p className="md:text-xl">
						Sign up and start enjoying the perks of Starbucks® Rewards.
					</p>
					<button className="rounded-2xl bg-green-800 px-4 py-2 text-sm font-semibold text-white md:mt-5 md:rounded-3xl md:px-6 md:text-lg md:font-bold">
						Join in the app
					</button>
					<span className="text-sm font-medium underline md:mt-[-10px] md:ml-2 md:text-lg">
						Or join online
					</span>
				</div>

				<div className="relative h-56 w-full md:h-full">
					<Image
						src="/rewards-hero.png"
						alt="Rewards Hero"
						fill
						quality={100}
						className="object-cover md:object-contain"
					/>
				</div>
			</div>
		</section>
	)
}
