import { Header } from "@/components/header/page"
import { SectionMain } from "@/components/section-main/page"
import { GettingStarted } from "./../components/getting-started/page"
import StickyContainer from "@/components/sticky-container/page"
import { GetFavorites } from "@/components/get-favorites/page"
import { EndlessExtras } from "@/components/endless-extras/page"
import { PaymentInformations } from "@/components/payment-informations/page"
import { RewardsComing } from "@/components/rewards-coming/page"
import { Questions } from "@/components/questions/page"
import { MoreInformation } from "@/components/more-information/page"

export default function Home() {
	return (
		<div>
			<Header />
			<StickyContainer />
			<SectionMain />
			<GettingStarted />
			<GetFavorites />
			<EndlessExtras />
			<PaymentInformations />
			<RewardsComing />
			<Questions />
			<MoreInformation />
		</div>
	)
}
