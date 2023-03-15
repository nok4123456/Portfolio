import React from "react"
import Header from "../component/common/Header"
import githubCat from "../assets/githubCat.svg"
import facebook from "../assets/facebook.svg"

function Contact() {
	return (
		<div className="pt-64 flex flex-col gap-5">
			<Header />
			<div className="pt-10 text-4xl text-white text-center">Contact Me</div>
			<div className="pt-5 grid grid-cols-3 mt-8 text-center place-content-around">
				<div>
					<div className="mb-5 text-2xl text-white">Email</div>
					<div>
						<a
							className="text-xl text-amber-200 hover:text-amber-500"
							href="mailto: nok4123456@gmail.com"
						>
							nok4123456@gmail.com
						</a>
					</div>
				</div>
				<div className="justify-self-center">
					<div className=" mb-7 text-2xl text-white">Github</div>
					<div>
						<a href="https://github.com/nok4123456">
							<img className="hover:invert" width="115" src={githubCat}></img>
						</a>
					</div>
				</div>
				<div className="justify-self-center">
					<div className="text-2xl text-white">Facebook</div>
					<div className="peer">
						<img
							width="300"
							className="transition-opacity ease-in duration-700 opacity-100 hover:opacity-0 "
							src={facebook}
						></img>
					</div>
					<div className="pt-5 transition-opacity ease-in duration-700 opacity-0 peer-hover:opacity-100">
						Nobody uses facebook now. LOL
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
