import React from "react"
import { useInView } from "react-intersection-observer"
import star from "../../assets/star.png"
import learning from "../../assets/learning.png"
import computing from "../../assets/computing.png"
import working from "../../assets/working.png"

function AboutMe() {
	const [ref1, inView1] = useInView({
		triggerOnce: true,
		rootMargin: "-40% 0px",
	})
	const [ref2, inView2] = useInView({
		triggerOnce: false,
		rootMargin: "-30% 0px",
	})
	const [ref3, inView3] = useInView({
		triggerOnce: false,
		rootMargin: "-30% 0px",
	})
	const [ref4, inView4] = useInView({
		triggerOnce: false,
		rootMargin: "-30% 0px",
	})

	const getTheAnimationStyle = (inView, isLeft: boolean, duration = 0.9) => {
		return {
			transform: inView
				? "translateX(0)"
				: `translateX(${isLeft ? "-20%" : "20%"})`,
			opacity: inView ? 1 : 0,
			transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
		}
	}

	return (
		<div className="grid grid-flow-row place-items-center">
			<div className="text-2xl text-white justify-center text-center pt-8">
				About Me
			</div>
			<div className="vl"></div>
			<div
				ref={ref1}
				className="text-center pt-8"
				style={getTheAnimationStyle(inView1, true)}
			>
				It is the start of my journey
			</div>
			<div>
				<img className="z-10 pt-7" width="60vw" src={star}></img>
			</div>
			<div
				ref={ref2}
				className=" grid grid-cols-2 h-96 place-items-center justify-items-center"
			>
				<div className="flex-1">
					<div className="m-5" style={getTheAnimationStyle(inView2, true)}>
						<h1 className="text-white text-3xl text-center ">
							My Academically Life
						</h1>
						<p className="pt-8">
							During my secondary school years, I excelled academically,
							achieving top grades in Physics, Mathematics, Economics, and ICT.
							I earned a total of 29 Best 5 scores in the Hong Kong Diploma of
							Secondary Education (DSE) exam. These achievements helped me
							secure admission to the prestigious Hong Kong University of
							Science and Technology (HKUST), where I pursued a Bachelor's
							degree in Mathematics and Economics.
						</p>
					</div>
				</div>
				<div className="text-center flex-1">
					<div
						style={{
							...getTheAnimationStyle(inView2, false, 5),
							width: "100%",
						}}
					>
						<img src={learning} className="rounded-3xl"></img>
					</div>
				</div>
			</div>
			<div className="h-48"></div>
			<div
				ref={ref3}
				className="  grid grid-cols-2 pt-32 h-96 place-items-center justify-items-center"
			>
				<div className="flex-1">
					<div style={getTheAnimationStyle(inView3, true, 5)}>
						<img src={computing} className="rounded-3xl"></img>
					</div>
				</div>
				<div className="flex-1">
					<div style={getTheAnimationStyle(inView3, false)} className="m-5">
						<h1 className="text-white text-3xl text-center">
							My Programming's Life
						</h1>
						<p className="pt-8">
							I began learning Python and R during my university years, and I
							quickly fell in love with the power and flexibility of these
							languages. After graduation, I began to expand my skill set by
							learning Java Spring and JavaScript React, which allowed me to
							start developing websites and programs. Through hard work and
							dedication, I have become proficient in these languages, and I am
							confident in my ability to take on complex projects that require
							them.
						</p>
					</div>
				</div>
			</div>
			<div className="h-64"></div>
			<div
				ref={ref4}
				className=" grid grid-cols-2 h-96 place-items-center justify-items-center"
			>
				<div className="flex-1">
					<div className="m-5" style={getTheAnimationStyle(inView4, true)}>
						<h1 className="text-white text-3xl text-center ">
							My Working Life
						</h1>
						<p className="pt-8">
							I have gained valuable experience working at several companies
							since graduation. During my first job at iASPEC, I used Java
							Spring Boot to develop a backend system for ECFPS. After that, I
							worked at Forex Forest, where I used React, React Native, and
							Node.js to develop websites and mobile apps for the company. This
							position allowed me to expand my skill set and gain valuable
							experience in frontend development.
						</p>
					</div>
				</div>
				<div className="text-center flex-1">
					<div
						style={{
							...getTheAnimationStyle(inView4, false, 5),
							width: "100%",
						}}
					>
						<img src={working} className="rounded-3xl"></img>
					</div>
				</div>
			</div>
			<div className="h-16 p-6 justify-items-center">
				<div
					style={getTheAnimationStyle(inView4, true, 10)}
					className="text-white"
				>
					The journey isn't finished yet.
				</div>
			</div>
		</div>
	)
}

export default AboutMe
