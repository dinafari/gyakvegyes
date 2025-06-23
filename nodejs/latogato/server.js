
/*  /hozzaad útvonalon egy fájlba írunk egy új sort: "Új látogató: Edina"
    /listaz útvonalon visszaolvassuk a fájl összes sorát
    /főoldal szöveget ad vissza pl. "Üdv a szerveren!"
*/


const http= require('http');
const fs= require('fs');

const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url==='/hozzaad'){
        fs.writeFile('latogato.txt','<h1>Új látogató:Edina</h1>','utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben</h1>');
                return;
            }

            fs.readFile('latogato.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);

            });
        });

    }else if(req.url==='/listaz'){
        fs.readFile('latogato.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<h1>${data}</h1>`);
        });

    }else if(req.url==='/fooldal'){
        res.statusCode=200;
        res.end('<h1>Üdv a szerveren!</h1>');
    }else{
        res.statusCode=404;
        res.end('<h1>Hiba, az oldal nem található! Error!</h1>');
    }


});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} oldalon!`);
});

