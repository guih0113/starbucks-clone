import { Star } from "lucide-react"

interface ButtonProps {
	number: number
	onClick: () => void
}

export function Button({ number, onClick }: ButtonProps) {
	return (
		<button className="flex cursor-pointer items-end gap-0.5" onClick={onClick}>
			{number} <Star fill="yellow" size={12} className="mb-1" />
		</button>
	)
}
