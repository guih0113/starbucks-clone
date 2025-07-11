import { CornerDownLeft } from "lucide-react"
import { Span } from "./span"

export function MoreInformation() {
	return (
		<section className="bg-gray-50 px-4 py-8 md:px-12 md:py-12">
			<div className="space-y-4 text-sm font-medium md:text-base">
				<p>At participating stores. Restrictions apply.</p>
				<p>
					¹Excludes taxes and gratuities. At participating stores. Some
					restrictions apply. Flights purchased close to departure may not earn
					double Stars. Stars and miles may not be earned on purchases of
					alcohol, Starbucks Cards and Starbucks Card reloads. For details,
					visit <Span text="deltastarbucks.com/terms" /> .
					<span className="inline-flex">
						<CornerDownLeft size={14} />
					</span>
				</p>
				<p>
					²At participating stores only. Some restrictions apply. Linked Card
					members will earn 2% Cash Back on the full purchase price of every
					Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars
					may not be earned on purchases of alcohol or on reloads of Starbucks
					Cards that are not registered. For details, visit{" "}
					<Span text="Terms and Conditions" />. Bank of America, N.A. Member
					FDIC.{" "}
					<span className="inline-flex">
						<CornerDownLeft size={14} />
					</span>
				</p>
				<p>
					³Individuals must link loyalty program accounts to participate in
					offer. Members with linked accounts will earn: (a) double Starbucks
					Rewards Stars on Qualifying Starbucks Transactions during Eligible
					Stays at Participating Marriott Bonvoy Hotels, excluding stays at
					Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht
					Collection, and (b) earn 100 Marriott Bonvoy Points upon completion of
					3 Qualifying Starbucks Transactions during Marriott Bonvoy Week.
					Qualifying Starbucks Transactions must be made at U.S. participating
					Starbucks stores and exclude purchases of alcoholic beverages,
					Starbucks Card eGifts and physical Starbucks gift. To earn Double
					Stars, the applicable stay must qualify as an Eligible Stay at a
					Participating Marriott Bonvoy® Hotel under offer terms and
					conditions. Other restrictions and exclusions apply. For full offer
					terms and conditions, visit{" "}
					<Span text="Starbucks.com/MarriottBonvoy" />. Marriott Bonvoy® and
					its affiliated brands and hotels are the registered trademarks and/or
					service marks of Marriott International, Inc. and its affiliates. Used
					under license from Marriott International, Inc.{" "}
					<span className="inline-flex">
						<CornerDownLeft size={14} />
					</span>
				</p>
				<div className="flex flex-col gap-3 lg:flex-row lg:gap-14">
					<div>
						<div className="space-y-4 md:w-3xl">
							<h2 className="pt-4 font-bold tracking-widest text-gray-500">
								EARNING STARS
							</h2>
							<p>
								Stars cannot be earned on purchases of alcohol, Starbucks Cards
								or Starbucks Card reloads.
							</p>
							<p className="md:w-2xl">
								Earn 1 Star per $1 spent when you scan your member barcode in
								the app, then pay with cash, credit/debit cards or mobile
								wallets at participating stores. You can also earn 1 Star per $1
								spent when you link a payment method and pay directly through
								the app.
							</p>
							<p className="md:w-2xl">
								Earn 2 Stars per $1 spent when you load funds and pay with your
								digital Starbucks Card in the app. You can also earn 2 Stars per
								$1 spent when you pay in-person at a participating store with
								your registered physical Starbucks Card or scan your member
								barcode in the app, and then use any physical Starbucks Card
								(regardless of whether it is registered) to complete the
								purchase.
							</p>
						</div>
						<div className="space-y-4 md:w-3xl">
							<h2 className="pt-4 font-bold tracking-widest text-gray-500">
								BENEFITS
							</h2>
							<p className="md:w-2xl">
								Free refills available during same in-store visit only. To
								qualify for the Birthday Reward, you must have made at least one
								Star-earning transaction.
							</p>
						</div>
					</div>
					<div>
						<div className="space-y-4 md:w-3xl">
							<h2 className="pt-4 font-bold tracking-widest text-gray-500">
								TERMS OF USE
							</h2>
							<p>
								For full program details visit{" "}
								<Span text="starbucks.com/rewards/terms" />.
							</p>
							<p className="md:w-2xl">
								Starbucks® Rewards benefits are available at participating
								Starbucks stores. Not all stores have the ability to honor
								Rewards at this time. Visit the{" "}
								<Span text="Starbucks Store Locator" /> and search for locations
								honoring “Redeem Rewards”.
							</p>
						</div>
						<div className="space-y-4 md:w-3xl">
							<h2 className="pt-4 font-bold tracking-widest text-gray-500">
								REDEEMING REWARDS
							</h2>
							<p className="md:w-2xl">
								Rewards cannot be redeemed for alcoholic beverages or
								multi-serve items. You pay the difference for any beverage
								customization over $1 and/or merchandise item over $20. Not all
								stores honor tiered Rewards. Select stores redeem 200 Stars for
								free food or drink items only.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
