import { Header } from "@/components/header/page"
import { SectionMain } from "@/components/section-main/page"
import { GettingStarted } from "./../components/getting-started/page"
import StickyContainer from "@/components/sticky-container/page"
import { GetFavorites } from "@/components/get-favorites/page"
import { EndlessExtras } from "@/components/endless-extras/page"

export default function Home() {
	return (
		<div>
			<Header />
			<StickyContainer />
			<SectionMain />
			<GettingStarted />
			<GetFavorites />
			<EndlessExtras />
		</div>
	)
}
