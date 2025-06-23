/* 1. Node.js – Fájlírás + Visszaolvasás
    Feladat:
    Készíts egy Node.js szervert, amely:

    / fooldal útvonalon visszaadja: <>Üdvözöllek a főoldalon</>
    /cukraszda útvonalon: írja ki fájlba (cukraszda.txt) a szöveget: „Üdvözlet a szervertől!”
    /olvasas útvonalon: olvassa vissza a fájl tartalmát és jelenítse meg HTML-ben
    Ha nem létező útvonalat kérnek le, 404-et adjon vissza

    Technikai elvárás:

    Használd a fs.writeFile és fs.readFile függvényeket

    Karakterkódolás legyen: 'utf-8'

    Futtatás: node app.js

*/





const http =require('http');
const port= 3000;
const hostname='127.0.0.1';
const fs= require('fs');

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/fooldal'){
        res.statusCode=200;
        res.end('<h1>Üdvözöllek a főoldalon</h1>');

    }else if(req.url==='/cukraszda'){
        fs.writeFile('cukraszda.txt','Finom sütemények és torák',(err)=>{
            if(err){
                res.statusCode =500;
                res.end('<h2>Hiba a fájl írása közben!</h2>');
                return;
            }

            fs.readFile('cukraszda.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h2>Hiba a fájl olvasása közben!</h2>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);

            });






        });

    }else if(req.url==='/olvasas'){
        fs.readFile('cukraszda.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl olvasása közben!</h2>');
                return;
            }
            res.statusCode=200;
            res.end(`<h2>A fájl tartalma:</h2><p>${data}</p>`);
        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!Fatal Error!</h1>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});