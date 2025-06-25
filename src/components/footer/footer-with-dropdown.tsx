"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { dropdowns } from "./page"

export function FooterWithDropdown() {
	const [openDropdown, setOpenDropdown] = useState<number | null>(null)

	return (
		<div>
			{dropdowns.map((dropdown, idx) => (
				<div className="pb-4" key={idx}>
					<div
						className="flex cursor-pointer items-center justify-between rounded-md py-2"
						onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
					>
						<h3 className="text-lg font-medium text-gray-800 md:text-xl">
							{dropdown.title}
						</h3>
						<span className="relative flex h-6 w-6 items-center justify-center">
							<span
								className={`absolute transition-all duration-300 ${
									openDropdown === idx
										? "scale-90 opacity-0"
										: "scale-100 opacity-100"
								}`}
							>
								<ChevronDown className="h-6 w-6 text-gray-500" />
							</span>
							<span
								className={`absolute transition-all duration-300 ${
									openDropdown === idx
										? "scale-100 opacity-100"
										: "scale-90 opacity-0"
								}`}
							>
								<ChevronUp className="h-6 w-6 text-gray-500" />
							</span>
						</span>
					</div>
					<div
						className={`overflow-hidden transition-all duration-500 ${
							openDropdown === idx
								? "max-h-96 opacity-100"
								: "max-h-0 opacity-0"
						}`}
						style={{
							willChange: "max-height, opacity",
							transition:
								"max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
						}}
					>
						<div className="min-h-0">
							{dropdown.items.map((item, i) => (
								<div
									key={i}
									className="cursor-pointer py-2 text-sm text-gray-700 hover:text-black md:text-lg"
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
