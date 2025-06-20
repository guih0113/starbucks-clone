import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["700"], // bold
	variable: "--font-open-sans",
})

export default function StickyContainer() {
	return (
		<div className="bg-darkgreen sticky top-0 z-10 flex items-center justify-between px-4 py-3 text-white md:py-4">
			<h1
				className={`${openSans.variable} text-sm font-black tracking-wide md:ml-7 md:text-base md:tracking-widest`}
			>
				STARBUCKS® REWARDS
			</h1>
			<button className="flex rounded-xl border border-white px-4 py-1 text-sm font-bold md:hidden">
				Join in the app
			</button>
		</div>
	)
}
