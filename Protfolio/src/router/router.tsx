import { createBrowserRouter } from "react-router-dom"
import Home from "../page/Home"
import Skill from "../page/Skill"

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/skill", element: <Skill /> },
])

export { router }
