import {createServer} from 'node:http';

// Define request handler


// Create HTTP Server
const server = createServer( (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>we have an HTTP Server</h1>');
});

// Listen for incoming request
server.listen(80, '127.0.0.1', () => {
    console.log('Server is running');

});

// Normal function vs Arrow Function
function handleRequest() {}
const handleRequest = () => {}
