import Image from "next/image";

export function SectionMain() {
	return (
		<section className="h-72 md:h-[500px] bg-cream">
			<div className="h-full grid grid-cols-1 md:grid-cols-2 lg:px-12">
				<div className="flex flex-col gap-5 justify-center items-center md:items-start py-6 px-4 md:px-20 text-center text-darkgreen">
					<h2 className="text-3xl font-bold md:text-6xl md:font-semibold md:text-left">
						It’s a great day for <br /> free coffee
					</h2>
					<p className="md:text-xl">
						Sign up and start enjoying the perks of Starbucks® Rewards.
					</p>
					<button className="bg-green-800 px-4 py-2 md:px-6 rounded-2xl md:mt-5 md:rounded-3xl text-white font-semibold md:font-bold text-sm md:text-lg">
						Join in the app
					</button>
					<span className="underline text-sm font-medium md:mt-[-10px] md:text-lg md:ml-2">
						Or join online
					</span>
				</div>

				<div className="w-full h-56 md:h-full relative">
					<Image
						src="/rewards-hero.png"
						alt="Rewards Hero"
						fill
						quality={100}
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
