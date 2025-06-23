/* 3. Node.js – Jegyzet fájl
    Feladat:
    Készíts egy szervert, amely:

    / útvonalon kiírja: „Jegyzet oldal”

    /uj útvonalon kiír a jegyzet.txt fájlba: „Új jegyzet: Tanulás fontos!”

    /jegyzetek útvonalon visszaolvassa és megjeleníti a jegyzet.txt tartalmát HTML formában
*/

const http= require('http');
const port= 3000;
const hostname='127.0.0.1';

const fs= require('fs');


const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    
    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Jegyzet oldal</h1>');

    }else if(req.url==='/uj'){
        fs.writeFile('jegyzet.txt','Új jegyzet:Tanulás fontos',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }
            

            fs.readFile('jegyzet.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                    return;
                }

                res.statusCode=200;
                res.end(`${data}`);

            });




        });

    }else if(req.url==='/jegyzetek'){
        fs.readFile('jegyzet.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a file olvasása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<h1>${data}</h1>`);
        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba, az oldal nem található!Fatal error!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});