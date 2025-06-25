import { SquareArrowOutUpRight } from "lucide-react"

interface SpanProps {
	text: string
}

export function Span({ text }: SpanProps) {
	return (
		<span className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-green-700 underline hover:no-underline md:text-base">
			{text}
			<SquareArrowOutUpRight size={12} />
		</span>
	)
}
