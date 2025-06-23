/*

    3. Node.js – Szerver fájlművelettel
    Feladat:
    Hozz létre egy szervert, amely:

    / útvonalon: "Főoldal"

    /ir: fájlba ír: "Vizsgához készülés sikeres!"

    /olvas: fájl tartalmát olvassa vissza és HTML-ben jeleníti meg

    
*/



const http=require('http');
const hostname='127.0.0.1';
const port=3000;

const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8');

    if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1>Főoldal</h1>');

    }else if(req.url==='/ir'){
        fs.writeFile('ir.txt','<h1>Vizsgához készülés sikeres!</h1>',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1><Hiba a fájl írása közben!</h1>');
                return;
            }
            


            fs.readFile('ir.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=200;
                    res.end('<h1><Hiba a fájl olvasása közben!</h1>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);


            });
        });

    }else if(req.url==='/olvas'){
        fs.readFile('ir.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500
                res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<h1>A fájl tartalma</h1><p>${data}</p>`);
        });


    }else{
        res.statusCode=404;
        res.end('<h1>Hiba!Az oldal nem található!Error!</h1>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});

