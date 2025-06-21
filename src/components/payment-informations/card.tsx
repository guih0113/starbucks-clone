import Image from "next/image"

interface InformationProps {
	imgUrl: string
	title: string
	description: string
}

export function Card({ imgUrl, title, description }: InformationProps) {
	return (
		<div className="flex gap-6">
			<div className="w-fit min-w-[120px]">
				<Image
					src={imgUrl}
					alt={title}
					width={120}
					height={120}
					quality={100}
				/>
			</div>

			<div className="space-y-4">
				<h4 className="font-bold md:text-xl">{title}</h4>
				<p className="text-sm font-medium md:w-sm md:text-lg">{description}</p>
			</div>
		</div>
	)
}
