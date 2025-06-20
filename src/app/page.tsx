import { Header } from "@/components/header/page"
import { SectionMain } from "@/components/section-main/page"
import { GettingStarted } from "./../components/getting-started/page"
import StickyContainer from "@/components/sticky-container/page"

export default function Home() {
	return (
		<div>
			<Header />
			<StickyContainer />
			<SectionMain />
			<GettingStarted />
		</div>
	)
}
