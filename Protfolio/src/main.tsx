import React from "react"
import ReactDOM from "react-dom/client"
import { store } from "./app/store"
import { Provider } from "react-redux"
import App from "./page/App"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<div className="font-mono">
				<App />
			</div>
		</Provider>
	</React.StrictMode>
)
