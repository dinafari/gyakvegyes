/* 1. Node.js – Vendéglista fájlban
    Feladat:
    Készíts egy szervert, amely:

    / útvonalon visszaadja: <h1>Vendéglista oldal</h1>

    /hozzaad útvonalon kiír egy nevet fájlba (vendegek.txt) – például: "Új vendég: Edina"

    /lista útvonalon visszaolvassa a fájl tartalmát és megjeleníti HTML-ben

    Használj: fs.writeFile, fs.appendFile, fs.readFile
    Fájlkezelés: 'utf-8'
    Hibakezelés is legyen benne

*/


const http = require('http');
const port=3000;
const hostname='127.0.0.1';
const fs= require('fs');

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Vendeglista oldal</h1>');

    }else if(req.url==='/hozzaad'){
        //A /hozzaad útvonalon fs.writeFile minden alkalommal felülírja a fájlt. 
        // Ha több vendéget szeretnél hozzáadni, akkor fs.appendFile kell ide, hogy hozzáfűzze.
      
        fs.appendFile('vendegek.txt','Új vendég: Edina\n',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }

            fs.readFile('vendegek.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                    return;

                }
                res.statusCode=200;
                res.end(`${data}`);
            });
        });

    }else if(req.url==='/lista'){
        fs.readFile('vendegek.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<h1>A fájl tartalma:</h1><p>${data}</p>`);

        });


    }else{
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});


