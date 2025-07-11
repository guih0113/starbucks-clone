import Image from "next/image"

interface InformationProps {
	imgUrl: string
	title: string
	description: string
}

export function Card({ imgUrl, title, description }: InformationProps) {
	return (
		<div className="flex w-fit gap-6">
			<div className="w-fit min-w-[120px]">
				<Image
					src={imgUrl}
					alt={title}
					width={125}
					height={125}
					quality={100}
				/>
			</div>

			<div className="space-y-4 md:space-y-6">
				<h4 className="font-bold md:w-[200px] md:text-xl">{title}</h4>
				<p className="text-sm font-medium md:w-50 md:text-lg lg:w-xs">
					{description}
				</p>
			</div>
		</div>
	)
}
