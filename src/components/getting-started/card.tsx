interface CardProps {
	number: number
	title: string
	description: string
}

export function Card({ number, title, description }: CardProps) {
	return (
		<div className="flex items-start gap-3 text-left md:flex-col md:items-center md:gap-8 md:text-center">
			<div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-green-700 text-2xl font-bold text-green-700 md:h-13 md:w-13">
				{number}
			</div>
			<div className="space-y-4 md:space-y-6">
				<h3 className="text-lg font-semibold md:text-xl md:font-bold">
					{title}
				</h3>
				<p className="text-sm font-medium md:text-base">{description}</p>
			</div>
		</div>
	)
}
