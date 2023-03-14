import React from "react"
import Header from "../component/common/Header"
import SkillCard from "../component/skill/SkillCard"
import Website from "../assets/website.png"
import app from "../assets/app.png"
import backend from "../assets/backend.png"
import SkillNode from "../component/skill/SkillNode"

function Skill() {
	return (
		<div className="pt-64 flex flex-col gap-5">
			<Header />
			<div className="text-center text-white text-2xl">SKILL</div>
			<div className="flex-1 place-self-center text-center">
				<div className="grid grid-cols-3">
					<div>
						<SkillCard
							picture={Website}
							title="Website Development"
							description="Website development involves designing and building websites for various purposes, ensuring they are functional, user-friendly, and optimized for search engines."
						/>
					</div>
					<div>
						<SkillCard
							picture={app}
							title="Mobile App Development"
							description="Mobile app development involves creating software applications for mobile devices such as smartphones and tablets."
						/>
					</div>
					<div>
						<SkillCard
							picture={backend}
							title="Backend Development "
							description="Backend development involves creating and managing the server-side of a web application, which includes the database, APIs, and server logic. "
						/>
					</div>
				</div>
			</div>
			<div className="mt-9 text-center text-white text-2xl">SKILL SET</div>
			<div className="flex flex-row">
				<SkillNode />
			</div>
		</div>
	)
}

export default Skill
