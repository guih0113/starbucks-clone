import { MapPin } from "lucide-react"
import Logo from "../logo"
import { SheetMenu } from "./sheetMenu"

export function Header() {
	return (
		<header>
			<div className="flex justify-between items-center py-4 px-6 md:py-7 md:px-11">
				<div className="flex items-center gap-12">
					<div className="w-10 h-10 md:w-14 md:h-14">
						<Logo />
					</div>

					<nav className="hidden md:block">
						<ul className="flex gap-6 font-bold text-md tracking-widest">
							<li className="cursor-pointer hover:text-green-700">MENU</li>
							<li className="cursor-pointer hover:text-green-700">REWARDS</li>
							<li className="cursor-pointer hover:text-green-700">
								GIFT CARDS
							</li>
						</ul>
					</nav>
				</div>

				<div className="hidden md:flex items-center gap-12">
					<div className="flex items-center gap-3 cursor-pointer hover:text-green-700 text-md font-extrabold">
						<MapPin />
						<span className="font-bold">Find a store</span>
					</div>

					<div className="space-x-4">
						<button className="border border-black rounded-xl px-5 py-1 font-semibold text-md cursor-pointer hover:bg-gray-200">
							Sign in
						</button>
						<button className="bg-black text-white rounded-xl px-5 py-1.5 font-bold text-md cursor-pointer hover:bg-black/70">
							Join now
						</button>
					</div>
				</div>

				<div className="flex md:hidden">
					<SheetMenu />
				</div>
			</div>
		</header>
	)
}
