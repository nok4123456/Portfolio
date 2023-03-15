import { createBrowserRouter } from "react-router-dom"
import Home from "../page/Home"
import Skill from "../page/Skill"
import Project from "../page/Project"
import Contact from "../page/Contact"

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/skill", element: <Skill /> },
	{ path: "/project", element: <Project /> },
	{ path: "/contact", element: <Contact /> },
])

export { router }
