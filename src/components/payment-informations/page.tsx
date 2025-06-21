import { Card } from "./card"

export function PaymentInformations() {
	return (
		<section className="bg-cream space-y-15 px-4 py-16">
			<div className="flex flex-col items-center justify-center gap-5">
				<h2 className="text-2xl font-semibold md:text-3xl md:font-bold">
					Cash or card, you earn Stars
				</h2>
				<p className="text-center text-sm font-medium md:w-3xl md:text-lg">
					No matter how you pay, you can earn Stars with your morning coffee.
					Those Stars add up to (really delicious) Rewards.
				</p>
			</div>

			<div>
				<div className="flex flex-col gap-10">
					<div>
						<h3 className="text-lg font-semibold">1★Star per dollar</h3>
						<p className="text-sm font-medium">Pay as you go</p>
					</div>

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
		</section>
	)
}
