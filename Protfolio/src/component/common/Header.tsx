import React from "react"

function Header() {
	return (
		<div className=" grid grid-rows-2 item-centre justify-center gap-3 text-center ">
			<div className="flex-1">
				<div className=" text-4xl text-white">Ken Chan Portfolio Website</div>
			</div>
			<div>
				<ul className="display inline-flex gap-5 ">
					<li className="hover:text-blue-300">About Me</li>
					<li className="hover:text-blue-300">Skill</li>
					<li className="hover:text-blue-300">Personal Project</li>
					<li className="hover:text-blue-300">Blog</li>
					<li className="hover:text-blue-300">Contact Information</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
