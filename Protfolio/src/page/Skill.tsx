import React from "react"
import Header from "../component/common/Header"
import SkillCard from "../component/skill/SkillCard"
import website from "../assets/websiteIcon.png"
import app from "../assets/app.png"
import backend from "../assets/backend.png"
import SkillNode from "../component/skill/SkillNode"
import {
	aws,
	css,
	ESLint,
	expo,
	github,
	html,
	java,
	jenkins,
	jest,
	js,
	mysql,
	node,
	reactIcon,
	reactNavigation,
	redux,
	springboot,
	ts,
} from "../assets/skillSet/pictureReexport"
import { useState } from "react"

function Skill() {
	const websiteArray = [
		css,
		html,
		js,
		reactIcon,
		redux,
		ts,
		node,
		jest,
		github,
		aws,
		jenkins,
		ESLint,
	]
	const appArray = [
		reactIcon,
		expo,
		reactNavigation,
		ESLint,
		github,
		redux,
		css,
		jenkins,
		ts,
		js,
	]
	const backendArray = [
		node,
		ESLint,
		jest,
		github,
		springboot,
		mysql,
		ts,
		java,
		aws,
	]
	const [skillType, setSkillType] = useState(websiteArray)
	return (
		<div className="pt-64 flex flex-col gap-5">
			<Header />
			<div className="text-center text-white text-2xl">SKILL</div>
			<div className="flex-1 place-self-center text-center">
				<div className="sm:grid grid-cols-3">
					<div onClick={() => setSkillType(websiteArray)}>
						<SkillCard
							picture={website}
							title="Website Development"
							description="Website development involves designing and building websites for various purposes, ensuring they are functional, user-friendly, and optimized for search engines."
						/>
					</div>
					<div onClick={() => setSkillType(appArray)}>
						<SkillCard
							picture={app}
							title="Mobile App Development"
							description="Mobile app development involves creating software applications for mobile devices such as smartphones and tablets."
						/>
					</div>
					<div onClick={() => setSkillType(backendArray)}>
						<SkillCard
							picture={backend}
							title="Backend Development "
							description="Backend development involves creating and managing the server-side of a web application, which includes the database, APIs, and server logic. "
						/>
					</div>
				</div>
			</div>
			<div className="mt-9 text-center text-white text-2xl">SKILL SET</div>
			<div className="flex flex-wrap gap-5 justify-center">
				{skillType.map((item, key) => {
					return <SkillNode picture={item} key={key} />
				})}
			</div>
			<div className="h-48"></div>
		</div>
	)
}

export default Skill
