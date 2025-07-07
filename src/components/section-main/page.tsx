import Image from "next/image"

export function SectionMain() {
	return (
		<section className="bg-cream md:h-[400px] lg:h-[450px] xl:h-[500px]">
			<div className="grid h-full grid-cols-1 md:grid-cols-2 md:pl-8 2xl:px-12">
				<div className="text-darkgreen flex flex-col items-center justify-center gap-5 px-4 py-6 text-center md:items-start 2xl:ml-20">
					<h2 className="text-center text-3xl font-bold md:w-xs md:text-left md:text-3xl lg:w-md lg:text-4xl xl:w-lg xl:text-left xl:text-5xl">
						It’s a great day for free coffee
					</h2>
					<p className="text-left md:text-xl">
						Sign up and start enjoying the perks of Starbucks® Rewards.
					</p>
					<button className="cursor-pointer rounded-2xl bg-green-800 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800/90 md:mt-5 md:rounded-3xl md:px-6 md:text-lg md:font-bold">
						Join in the app
					</button>
					<span className="cursor-pointer text-sm font-medium underline hover:no-underline md:mt-[-10px] md:ml-2 md:text-lg">
						Or join online
					</span>
				</div>

				<div className="relative h-56 w-full md:h-full">
					<Image
						src="/rewards-hero.png"
						alt="Rewards Hero"
						fill
						quality={100}
						className="object-fill md:object-cover"
					/>
				</div>
			</div>
		</section>
	)
}
