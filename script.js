const http = require('http')
const fs = require('fs')

let PORT = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <header>
                <h1>Header</h1>
            </header>
            <body>
                <h2>Body</h2>
            </body>
            <footer>
                <h3>footer</h3>
            </footer>
            </html>
        `)
    // res.end('Hello, World!\n');
  });
  
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
