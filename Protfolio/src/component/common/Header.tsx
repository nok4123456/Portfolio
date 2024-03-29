import React from "react"
import { Link } from "react-router-dom"

function Header() {
	return (
		<div className=" grid grid-rows-2 item-centre justify-center gap-3 text-center ">
			<div className="flex-1">
				<div className=" text-4xl text-white">Ken Chan Portfolio Website</div>
			</div>
			<div>
				<ul className="display inline-flex gap-5 ">
					<Link to="/">
						<li className="hover:text-blue-300">About Me</li>
					</Link>
					<Link to="/skill">
						<li className="hover:text-blue-300">Skill</li>
					</Link>
					<Link to="/project">
						<li className="hover:text-blue-300">Personal Project</li>
					</Link>
					<Link to="/contact">
						<li className="hover:text-blue-300">Contact Information</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default Header
