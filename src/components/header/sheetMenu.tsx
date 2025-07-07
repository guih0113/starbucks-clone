import Logo from "./logo"
import { Separator } from "../ui/separator"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"
import { AlignJustify, MapPin } from "lucide-react"

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
						<div className="h-10 w-10">
							<Logo />
						</div>
					</SheetTitle>
				</SheetHeader>
				<Separator className="mb-6" />
				<div className="px-6">
					<div className="flex flex-col gap-8 text-xl">
						<span>Menu</span>
						<span>Rewards</span>
						<span>Gift Cards</span>
					</div>

					<Separator className="my-9" />

					<div className="space-y-5 space-x-4">
						<button className="rounded-xl border border-black px-4 py-1 text-sm font-semibold">
							Sign in
						</button>
						<button className="rounded-xl bg-black px-4 py-1.5 text-sm font-bold text-white">
							Join now
						</button>
						<div className="flex gap-2">
							<MapPin />
							<span className="text-sm font-semibold">Find a store</span>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
