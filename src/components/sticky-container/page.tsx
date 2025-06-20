import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["700"], // bold
	variable: "--font-open-sans",
})

export default function StickyContainer() {
	return (
		<div className="sticky top-0 z-10 bg-darkgreen text-white px-4 py-3 md:py-4 flex justify-between items-center">
			<h1
				className={`${openSans.variable} font-black text-sm md:text-base tracking-wide md:tracking-widest md:ml-7`}
			>
				STARBUCKS® REWARDS
			</h1>
			<button className="border border-white rounded-xl px-4 py-1 font-bold text-sm flex md:hidden">
				Join in the app
			</button>
		</div>
	)
}
