// Here we are importing different modules used in backend work.


let http = require('http');
let url = require('url');
let fs = require('fs');

// Creating a server and saving it to a variable. This instance of the server can now be 
// accessed using this variable.

// the createServer method comes from the http module requested above.
// it accepts to arguemnts, the REQuest and the RESponse objects and passes them into a function that fires when a request is made by a browser.


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // setting the header content type of response object.
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch (req.url) {
        case '/': 
            path += 'index.html';
            break;
        case '/about': 
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact.html';
            break;
        default:
            path += '404.html';
            break;       
    };

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })

});


// listen does just that, it defines the port number on which it listens to
// and then preforms a function to let us know it is listening.
server.listen(8080, 'localhost', () => {
    console.log('listening for request on port 8080');
});