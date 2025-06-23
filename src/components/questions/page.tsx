import { SquareArrowOutUpRight } from "lucide-react"

export function Questions() {
	return (
		<section className="px-4 py-16 md:px-72 md:py-28">
			<div className="space-y-5">
				<h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
					Questions?
				</h2>
				<p className="text-sm font-medium md:w-3xl md:text-lg">
					We want to help in any way we can. You can ask your barista anytime or
					we’ve answered the most commonly asked terms{" "}
					<span className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-green-700 underline hover:no-underline md:text-base">
						right over here
						<SquareArrowOutUpRight size={12} />
					</span>{" "}
					.
				</p>
			</div>
		</section>
	)
}
