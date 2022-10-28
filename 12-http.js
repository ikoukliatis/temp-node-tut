const http = require('http')

const server = http.createServer((req, res) => {
    //console.log(req)
    if (req.url === '/') {
        res.write('Welcome to our home page')
        res.end()    

    }
    else if (req.url === '/about') {
        res.end('This is the about page')    

    }
    else {
        res.end(`<h1>Oops!</h1><p>Can't seem to find the page you are looking for<p>`)
    }
})

server.listen(5000)
