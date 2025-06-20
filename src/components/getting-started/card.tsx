interface CardProps {
	number: number
	title: string
	description: string
}

export function Card({ number, title, description }: CardProps) {
	return (
		<div className="flex items-start gap-3 md:gap-8 text-left md:flex-col md:items-center md:text-center">
			<div className="h-12 w-12 md:h-13 md:w-13 aspect-square border-2 border-green-700 rounded-full text-green-700 flex items-center justify-center text-2xl font-bold">
				{number}
			</div>
			<div className="space-y-4 md:space-y-6">
				<h3 className="font-semibold text-lg md:font-bold md:text-xl">
					{title}
				</h3>
				<p className="text-sm font-medium md:text-base">{description}</p>
			</div>
		</div>
	)
}
