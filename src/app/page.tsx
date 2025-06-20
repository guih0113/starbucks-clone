import { Header } from "@/components/header/page"
import { SectionMain } from "@/components/section-main/page"
import { SectionSecondary } from "@/components/section-secondary/page"
import StickyContainer from "@/components/sticky-container/page"

export default function Home() {
	return (
		<div>
			<Header />
			<StickyContainer />
			<SectionMain />
			<SectionSecondary />
		</div>
	)
}
