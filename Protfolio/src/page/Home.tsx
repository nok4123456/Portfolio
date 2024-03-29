import React from "react"
import Header from "../component/common/Header"
import Doge from "../assets/Doge.png"
import AboutMe from "../component/home/AboutMe"
import { Link } from "react-router-dom"

function Home() {
	return (
		<div className="pt-64 flex flex-col gap-5">
			<Header />
			<div className="text-sm sm:text-2xl text-center text-blue-500 ">
				Welcome to my portfolio
			</div>
			<div className="text-sm sm:text-xl text-center">
				A developer replaced by AI soon
			</div>
			<div className="text-sm text-gray-500 text-center ">
				Full Stack | Java | Typescript | React | Node.js | Spring Boot | Dog
				Lover
			</div>
			<div className="flex flex-col sm:grid sm:grid-cols-2 pt-20  text-md sm:text-2xl place-self-center ">
				<div className="mr-10 mb-6 place-self-end flex-initial w-48">
					<h1 className="text-white text-center ">My name is Ken.</h1>
					<p className=" text-sm text-center">
						I'm a junior developer. I'm passionate about creating user-friendly
						websites.
					</p>
				</div>
				<div className="ml-10 place-self-start">
					<img src={Doge} className="w-48" />
				</div>
			</div>
			<AboutMe />
			<div className="flex-1">
				<div className=" mb-10 text-center">
					<Link to="/skill">
						<button className="border-2 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full">
							Check out the skill I got
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
