import Logo from "../logo";
import { Separator } from "../ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import { AlignJustify, MapPin } from "lucide-react";

export function SheetMenu() {
	return (
		<Sheet>
			<SheetTrigger>
				<div className="h-6 w-6 text-gray-500">
					<AlignJustify />
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						<div className="w-10 h-10">
							<Logo />
						</div>
					</SheetTitle>
				</SheetHeader>
				<Separator className="mb-6" />
				<div className="px-6">
					<div className="text-xl flex flex-col gap-8">
						<span>Menu</span>
						<span>Rewards</span>
						<span>Gift Cards</span>
					</div>

					<Separator className="my-9" />

					<div className="space-x-4 space-y-5">
						<button className="border border-black rounded-xl px-4 py-1 font-semibold text-sm">
							Sign in
						</button>
						<button className="bg-black text-white rounded-xl px-4 py-1.5 font-bold text-sm">
							Join now
						</button>
						<div className="flex gap-2">
							<MapPin />
							<span className="font-semibold text-sm">Find a store</span>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
