import * as React from "react"
import * as ReactDOM from "react-dom"

import { App } from "./components/app"

import "~/assets/main.css"

const root = document.getElementById("root")

if (root) {
    ReactDOM.render(<App />, root)
}
