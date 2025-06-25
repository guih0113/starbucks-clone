import { FooterWithDropdown } from "./footer-with-dropdown"
import { FooterWithOutDropdown } from "./footer-without-dropdown"

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
		<footer className="px-4 md:px-14">
			<div className="lg:hidden">
				<FooterWithDropdown />
			</div>
			<div className="hidden lg:flex">
				<FooterWithOutDropdown />
			</div>
		</footer>
	)
}
