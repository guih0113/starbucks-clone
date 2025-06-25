import { dropdowns } from "./page"

export function FooterWithOutDropdown() {
	return (
		<div className="flex gap-12">
			{dropdowns.map((item, idx) => (
				<div className="flex flex-col" key={idx}>
					<h3 className="text-xl font-medium">{item.title}</h3>
					<div className="mt-4 flex flex-col">
						{item.items.map((item, idx) => (
							<span
								className="w-52 cursor-pointer py-2 text-lg text-gray-700 hover:text-black"
								key={idx}
							>
								{item}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
