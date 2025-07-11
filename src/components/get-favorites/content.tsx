import Image from "next/image"

interface ContentProps {
	imgUrl: string
	title: string
	description: string
}

export function Content({ imgUrl, title, description }: ContentProps) {
	return (
		<div className="bg-mint flex flex-col items-center justify-center gap-8 px-6 py-12 text-center inset-shadow-sm inset-shadow-black/15 lg:flex-row">
			<div className="flex justify-center">
				<Image
					src={imgUrl}
					alt={title}
					width={380}
					height={380}
					quality={100}
				/>
			</div>
			<div className="flex w-fit flex-col gap-6">
				<h3 className="text-center text-lg font-semibold md:w-md md:text-2xl md:font-bold lg:text-left">
					{title}
				</h3>
				<p className="text-sm font-medium md:w-md md:text-lg lg:text-left">
					{description}
				</p>
			</div>
		</div>
	)
}
