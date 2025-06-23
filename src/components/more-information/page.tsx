import { SquareArrowOutUpRight } from "lucide-react"

export function MoreInformation() {
	return (
		<section className="bg-foam px-4 py-8">
			<div className="space-y-4 text-sm font-medium md:w-3xl md:text-lg">
				<p>At participating stores. Restrictions apply.</p>
				<p>
					¹Excludes taxes and gratuities. At participating stores. Some
					restrictions apply. Flights purchased close to departure may not earn
					double Stars. Stars and miles may not be earned on purchases of
					alcohol, Starbucks Cards and Starbucks Card reloads. For details,
					visit{" "}
					<span className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-green-700 underline hover:no-underline md:text-base">
						deltastarbucks.com/terms
						<SquareArrowOutUpRight size={12} />
					</span>{" "}
					.
				</p>
			</div>
		</section>
	)
}
