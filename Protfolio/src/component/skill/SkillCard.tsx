import React from "react"

function SkillCard(prop: any) {
	return (
		<div className="min-h-full m-5 max-w-sm border place-items-center rounded-lg hover:shadow-sm hover:shadow-white bg-gray-800 border-gray-700">
			<img
				className="mt-5 rounded-t-lg mx-auto invert"
				src={prop.picture}
				alt=""
				width="150"
			/>

			<div className="p-5">
				<h5 className="mb-5 text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{prop.title}
				</h5>

				<p className="mt-5 text-xs sm:text-lg font-normal text-gray-700 dark:text-gray-400">
					{prop.description}
				</p>
			</div>
		</div>
	)
}

export default SkillCard
