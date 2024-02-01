const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;
const handlereq = (fileName, statusCode, req, res) => {
    fs.readFile(fileName, "utf-8",
        (err, data) => {
            if (err){
                console.log(err);
            }
            else{
                res.writeHead (200 , {
                    "content-type" : "text/html"});
                    res.write(data);
                    res.end();
                
            }
        });
}
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        handlereq("index.html", 200 , req, res);
    }
    else if(req.url === "/about") {
        handlereq("about.html", 200, req, res)
    }
    else if(req.url === "/contact") {
        handlereq("contact.html", 200, req, res)
    }
    else {
        handlereq("404.html", 404, req, res)
    }
});

server.listen(PORT, () => {
    console.log(`Server is running`)
});