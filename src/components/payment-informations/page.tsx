import { Separator } from "../ui/separator"
import { Card } from "./card"

export function PaymentInformations() {
	return (
		<section className="bg-cream space-y-15 px-4 py-16 md:px-12">
			<div className="flex flex-col items-center justify-center gap-5">
				<h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
					Cash or card, you earn Stars
				</h2>
				<p className="text-center text-sm font-medium md:w-3xl md:text-lg">
					No matter how you pay, you can earn Stars with your morning coffee.
					Those Stars add up to (really delicious) Rewards.
				</p>
			</div>

			<div className="space-y-6">
				<div className="flex flex-col gap-8 md:flex-row md:gap-27">
					<div className="md:space-y-2">
						<h3 className="text-lg font-semibold md:text-2xl">
							1★{"  "}Star per dollar
						</h3>
						<p className="text-sm font-medium md:text-base">Pay as you go</p>
					</div>

					<div className="flex flex-col gap-10 md:flex-row">
						<Card
							imgUrl="/payment-1.png"
							title="Scan and pay separately"
							description="Use cash or credit/debit card at the register."
						/>
						<Card
							imgUrl="/payment-2.png"
							title="Save payment in the app"
							description="Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
						/>
					</div>
				</div>
				<Separator className="mb-10" />
				<div className="flex flex-col gap-8 md:flex-row md:gap-27">
					<div className="md:space-y-2">
						<h3 className="text-lg font-semibold md:text-2xl">
							2★{"  "}Stars per dollar
						</h3>
						<p className="text-sm font-medium md:text-base">
							Add funds in the app
						</p>
					</div>

					<div className="flex flex-col gap-10 md:flex-row">
						<Card
							imgUrl="/payment-3.png"
							title="Preload"
							description="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
						/>
						<Card
							imgUrl="/payment-4.png"
							title="Register your gift card"
							description="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
