import { Header } from "@/components/header/page"
import { SectionMain } from "@/components/section-main/page"
import { SectionSecondary } from "@/components/section-secondary/page"

export default function Home() {
	return (
		<div>
			<Header />
			<SectionMain />
			<SectionSecondary />
		</div>
	)
}
