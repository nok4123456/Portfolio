import React from "react"
import { useEffect } from "react"

function AboutMe() {
	useEffect(() => {
		const script = document.createElement("script")
		script.src = "../../script/scrolling.js"
		script.async = true
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<>
			<div
				className="text-2xl text-white justify-center text-center pt-8
            "
			>
				AboutMe
			</div>
			<div className="vl"></div>
			<div className="hidden">It is the start of my journey</div>
		</>
	)
}

export default AboutMe
