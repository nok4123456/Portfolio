import React from "react"
import Header from "../component/common/Header"
import Doge from "../assets/Doge.png"
import AboutMe from "../component/home/AboutMe"

function Home() {
	return (
		<div className="pt-64 flex flex-col gap-5">
			<Header />
			<div className="text-2xl text-center text-blue-500 ">
				Welcome to my portfolio
			</div>
			<div className="text-xl text-center">A developer replaced by AI soon</div>
			<div className="text-sm text-gray-500 text-center ">
				Full Stack | Java | Typescript | React | Node.js | Spring Boot | Dog
				Lover
			</div>
			<div className="grid grid-cols-2  pt-20  text-2xl justify-center ">
				<div className="mr-10 mb-6 place-self-end flex-initial w-48">
					<h1 className="text-white ">My name is Ken.</h1>
					<p className=" text-sm">
						I'm a junior developer with experience in React and Java. I'm
						passionate about creating user-friendly websites.
					</p>
				</div>
				<div className="ml-10 place-self-start">
					<img src={Doge} className="w-48" />
				</div>
			</div>
			<AboutMe />
		</div>
	)
}

export default Home
