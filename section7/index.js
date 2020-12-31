// const http = require("http")

// http.createServer((request, response) => {
//     response.write("Hello world!!")
//     response.end()
// }).listen(8000)

const fs = require("fs")
const express = require("express")
const server = express() 

const html = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html")

const getHome = (req, res) => {
    return res.write(html)
}

server.get('/', getHome)


server.get('/about', (req, res) => {
    res.write(about)
})

server.listen(8000, () =>{
    console.log("Server is live!!")
})
