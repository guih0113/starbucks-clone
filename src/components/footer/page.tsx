import { Separator } from "../ui/separator"
import { FooterWithDropdown } from "./footer-with-dropdown"
import { FooterWithOutDropdown } from "./footer-without-dropdown"
import {
	SiSpotify,
	SiFacebook,
	SiPinterest,
	SiInstagram,
	SiYoutube,
	SiX,
} from "react-icons/si"

export const dropdowns = [
	{
		title: "About Us",
		items: [
			"Our Company",
			"Our Coffee",
			"About Starbucks",
			"Starbucks Archive",
			"Investor Relations",
			"Customer Service",
			"Contact Us",
		],
	},
	{
		title: "Careers",
		items: [
			"Culture and Values",
			"Belonging at Starbucks",
			"College Achievement Plan",
			"Alumni Community",
			"U.S. Careers",
			"International Careers",
		],
	},
	{
		title: "Social Impact",
		items: [
			"Communities",
			"Starbucks Foundation",
			"Sustainability",
			"Environmental and Social Impact Reporting",
		],
	},
	{
		title: "For Business Partners",
		items: [
			"Landlord Support Center",
			"Suppliers",
			"Corporate Gift Card Sales",
			"Office and Foodservice Coffee",
		],
	},
	{
		title: "Order and Pick Up",
		items: [
			"Order on the App",
			"Order on the Web",
			"Delivery",
			"Order and Pick Up Options",
			"Explore and Find Coffee for Home",
		],
	},
]

export function Footer() {
	return (
		<footer className="px-4 pt-4 pb-28 md:px-14">
			<div className="lg:hidden">
				<FooterWithDropdown />
			</div>
			<div className="hidden lg:flex">
				<FooterWithOutDropdown />
			</div>
			<Separator className="my-4" />
			<div className="flex flex-col gap-6">
				<div className="mt-6 flex gap-1">
					<div className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
						<SiSpotify className="size-7" />
					</div>
					<div className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
						<SiFacebook className="size-7" />
					</div>
					<div className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
						<SiPinterest className="size-7" />
					</div>
					<div className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
						<SiInstagram className="size-7" />
					</div>
					<div className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
						<SiYoutube className="size-7" />
					</div>
					<div className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-200">
						<SiX className="size-7" />
					</div>
				</div>
				<div className="ml-3 flex flex-col gap-4 font-medium">
					<span className="w-fit cursor-pointer text-lg text-gray-800 hover:underline">
						Privacy Notice
					</span>
					<span className="w-fit cursor-pointer text-lg text-gray-800 hover:underline">
						Consumer Health Privacy Notice
					</span>
					<span className="w-fit cursor-pointer text-lg text-gray-800 hover:underline">
						Terms of Use
					</span>
					<span className="w-fit cursor-pointer text-lg text-gray-800 hover:underline">
						Do Not Share My Personal Information
					</span>
					<span className="w-fit cursor-pointer text-lg text-gray-800 hover:underline">
						CA Supply Chain Act
					</span>
					<span className="w-fit cursor-pointer text-lg text-gray-800 hover:underline">
						Accessibility
					</span>
					<span className="w-fit cursor-pointer text-lg text-gray-800 hover:underline">
						Cookie Preferences
					</span>
					<span className="mt-2 text-sm text-gray-500">
						© 2025 Starbucks Coffee Company. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
	)
}
