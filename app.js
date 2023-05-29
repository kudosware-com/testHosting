const express = require("express")
const ejsMate = require("ejs-mate")
const app = express()

require("dotenv").config()
const http = require("http")
const httpPort = process.env.HTTP_PORT
const appPort = process.env.APP_PORT_DEFAULT

const path = require("path")
app.engine("ejs", ejsMate)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

//routes
app.get("/", (req, res) => {
    res.render("./home")
})
app.get("/apply", (req, res) => {
    res.render("./candidate")
})
app.get("/postJob", (req, res) => {
    res.render("./referee")
})


//http server
const httpServer = http.createServer(app)
httpServer.listen(httpPort, () => {
    console.log(`HTTP server started on port ${httpPort}`)
})


//https server
// const options = {
//     key: fs.readFileSync("pathToPrivate.key"),
//     cert: fs.readFileSync("pathToCertificate.crt")
// }
// const httpsServer = https.createServer(options, app)
// httpServer.listen(httpsPort, ()=>{
//     console.log(`HTTPS server started on port ${httpsPort}`)
// })


app.listen(appPort, () => {
    console.log(`Default server started on port ${appPort}`)
})