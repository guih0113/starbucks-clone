import { Star } from "lucide-react"

interface ButtonProps {
	number: number
}

export function Button({ number }: ButtonProps) {
	return (
		<button className="flex items-end gap-0.5">
			{number} <Star fill="yellow" size={12} className="mb-1" />
		</button>
	)
}
