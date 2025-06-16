import Logo from "../logo";
import { SheetMenu } from "./sheetMenu";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["700"], // bold
	variable: "--font-open-sans",
});

export function Header() {
	return (
		<header>
			<div className="flex justify-between items-center p-4">
				<div>
					<Logo />
				</div>

				<div>
					<SheetMenu />
				</div>
			</div>

			<div className="bg-darkgreen text-white px-4 py-3 flex justify-between items-center">
				<h1 className={`${openSans.variable} font-bold text-sm tracking-wide`}>
					STARBUCKS® REWARDS
				</h1>
				<button className="border border-white rounded-xl px-4 py-1 font-bold text-sm">
					Join in the app
				</button>
			</div>
		</header>
	);
}
