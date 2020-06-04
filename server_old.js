const http = require("http")

const server = http.createServer((req, res) => {
    res.statusCode = 200
    // status of 200 is a success

    res.setHeader("Content-Type", "text/html")
    // tells browser what we are sending back

    res.write("<h1>Hello, World</h1>")
    //Send back content

    res.end()
    // sends response back to browser
})
// web servers need to be contininously listening for incoming requests.
server.listen(8080, () => {
    console.log("server started on port 8080")
})