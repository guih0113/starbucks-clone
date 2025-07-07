import { MapPin } from "lucide-react"
import Logo from "./logo"
import { SheetMenu } from "./sheetMenu"

export function Header() {
	return (
		<header>
			<div className="flex items-center justify-between px-6 py-4 md:px-11 md:py-7">
				<div className="flex items-center gap-12">
					<div className="h-10 w-10 md:h-14 md:w-14">
						<Logo />
					</div>

					<nav className="hidden lg:block">
						<ul className="text-md flex gap-6 font-bold tracking-widest">
							<li className="cursor-pointer hover:text-green-700">MENU</li>
							<li className="relative cursor-pointer hover:text-green-700">
								REWARDS
								<div className="absolute top-15 left-0 h-2 w-full bg-green-800"></div>
							</li>
							<li className="cursor-pointer hover:text-green-700">
								GIFT CARDS
							</li>
						</ul>
					</nav>
				</div>

				<div className="hidden items-center gap-12 lg:flex">
					<div className="text-md flex cursor-pointer items-center gap-3 font-extrabold hover:text-green-700">
						<MapPin />
						<span className="font-bold">Find a store</span>
					</div>

					<div className="space-x-4">
						<button className="text-md cursor-pointer rounded-xl border border-black px-5 py-1 font-semibold hover:bg-gray-200">
							Sign in
						</button>
						<button className="text-md cursor-pointer rounded-xl bg-black px-5 py-1.5 font-bold text-white hover:bg-black/70">
							Join now
						</button>
					</div>
				</div>

				<div className="flex lg:hidden">
					<SheetMenu />
				</div>
			</div>
		</header>
	)
}
