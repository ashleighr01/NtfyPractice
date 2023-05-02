/* fetch('https://ntfy.sh/arufus_test', {
    method: 'POST', // PUT works too
    body: "There's a new scholarship available!",
    headers: {
        "Title" : "Check the senior website!", 
        "Priority" : "4"
    }
})*/

const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200);
    res.end('{"message": "Click here to see new scholarships!"}');
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})