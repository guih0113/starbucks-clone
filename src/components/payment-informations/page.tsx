export function PaymentInformations() {
	return (
		<section className="bg-cream space-y-18 px-4 py-16">
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
				<div>
					<div>
						<h3 className="font-bold">1★Star per dollar</h3>
						<p>Pay as you go</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2">
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</section>
	)
}
