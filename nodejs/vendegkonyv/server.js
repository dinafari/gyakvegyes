/* 1. Node.js – Fájlírás + Visszaolvasás
    Feladat:
    Készíts egy Node.js szervert, amely:

    / útvonalon visszaadja: <h1>Vendégkönyv</h1>
    /hozzair útvonalon: írja ki fájlba (vendeg.txt) a szöveget: „Üdvözlet a szervertől!”
    /olvas útvonalon: olvassa vissza a fájl tartalmát és jelenítse meg HTML-ben
    Ha nem létező útvonalat kérnek le, 404-et adjon vissza

    Technikai elvárás:

    Használd a fs.writeFile és fs.readFile függvényeket

    Karakterkódolás legyen: 'utf-8'

    Futtatás: node app.js

*/





const http= require ('http');

const  hostname='127.0.0.1';
const port=3000;

const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8');
    if(req.url==='/'){
        res.statusCode=200
        res.end('<h1>Vendégkönyv</h1>');

    }else if(req.url==='/hozzair'){
        fs.writeFile('vendeg.txt','Üdvözlet a szervertől!',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl írása közben!</h2>');
                return;
            }

            fs.readFile('vendeg.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h2>Hiba a fájl olvasása közben!</h2>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);
            })



        });
        
    }else if(req.url==='/olvas'){
        fs.readFile('vendeg.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl olvasása közben!</h2');
                return;
            }
            res.statusCode=200;
            res.end(`<h2>A fájl tartalma:</h2><p>${data}</p>`);
        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);

});
