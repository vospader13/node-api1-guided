const http = require("http")

const server = http.createServer((req, res) => {
	// a status code of 200 means a successful response, no issues
	res.statusCode = 200

	// tell the browser, or the client, that we're sending back some JSON
	res.setHeader("Content-Type", "application/json")

	// the client is now expecting some JSON, send it out
	res.write(JSON.stringify({ message: "hello, world" }))

	// send the response off
	res.end()
})

server.listen(8080, () => {
	console.log("server started at port 8080")
})
