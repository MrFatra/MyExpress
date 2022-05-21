var http = require('http');

// import module fs
var fs = require('fs');

// membuat fungsi panggil file html
function panggilHtml(path, res) {
    fs.readFile(path, function(err, data) {
        // penanganan error
        if (err) {
            res.writeHead(404);
            res.write("<h1>Halaman tidak ditemukan...</h1>");
        } else { // jika tidak error akan terima data
            res.write(data);
        }
        // akhiri response
        res.end();
    });
}

// membuat fungsi panggil css
function panggilCss(req, res, path) {
    if (req.url == '/style.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' }); // set header dengan kode akses 200
        fs.readFile(path, function(err, data) {
            res.write(data);
            res.end();
        });
    }

}

var server = http.createServer();

function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // panggil fungsi panggilCss
    panggilCss(req, res, "style.css");

    // panggil fungsi panggilHtml
    panggilHtml('index.html', res);
}

// parameter string harus diisi dengan value 'request'
server.on('request', onRequest);

server.listen(9000);