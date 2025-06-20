interface CardProps {
	number: number
	title: string
	description: string
}

export function Card({ number, title, description }: CardProps) {
	return (
		<div className="flex items-start gap-3 text-left md:flex-col md:items-center md:text-center">
			<div className="h-12 w-12 aspect-square border-2 border-green-700 rounded-full text-green-700 flex items-center justify-center text-2xl font-bold">
				{number}
			</div>
			<div className="space-y-4">
				<h3 className="font-semibold text-lg">{title}</h3>
				<p className="text-sm font-medium">{description}</p>
			</div>
		</div>
	)
}
