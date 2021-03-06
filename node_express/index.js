import express from "express"
import path from "path"
import { requestTime, logger } from "./middlewares.js"
import serverRoutes from "./routes/servers.js"

const __dirname = path.resolve()
const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "ejs"))

const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, "static")))

// научим приложение общаться с json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// регистрируем
app.use(requestTime)
app.use(logger)
app.use(serverRoutes)

// работаем с шаблонизатором ejs
app.get("/", (req, res) => {
    res.render("index", { title: "Main Page", active: "main" })
})

app.get("/features", (req, res) => {
    res.render("features", { title: "Features Page", active: "features" })
})

app.listen(3000)