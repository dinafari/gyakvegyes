/*5. Node.js
Feladat:
Hozz létre egy szervert, amely:

A / útvonalon visszaad egy HTML szöveget: „Üdvözöllek a termékoldalon!”
A /velemeny útvonalon hozzon létre egy velemeny.txt fájlt a következő szöveggel:
„Kiváló termék, gyors szállítás!”, és jelenítse meg HTML formázással.*/

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Üdvözöllek a termékoldalon!</h1>');
    } else if (req.url === '/velemeny') {
        // Fájl létrehozása
        fs.writeFile('velemeny.txt', 'Kiváló termék, gyors szállítás!', (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('<p>Hiba a fájl írása közben!</p>');
                return;
            }

            // Fájl beolvasása sikeres írás után
            fs.readFile('velemeny.txt', 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('<p>Hiba a fájl olvasása közben!</p>');
                    return;
                }

                res.statusCode = 200;
                res.end(`<h2>${data}</h2>`);
            });
        });
    } else {
        res.statusCode = 404;
        res.end('<h1>Hiba! Az oldal nem található.</h1>');
    }
});

server.listen(port, hostname, () => {
  console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});
