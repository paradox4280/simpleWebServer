import morgan from "morgan"
import express from "express"
import serveIndex from "serve-index"

import { PORT } from "./config/defaults.js"

const app = express()

app.use(morgan("tiny"))
app.use("/", express.static("./public/files/"), serveIndex("./public/files/", {
    icons: true, hidden: true, stylesheet:  "./public/css/style.css"
}))

console.clear()

const start = async () => {
    try {
        app.listen(PORT, () => console.log(
            `server is running on http://127.0.0.1:${PORT}`
        ))
    } catch (e) {
        console.log(e.message)
    }
}

start()
