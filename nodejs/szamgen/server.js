const http= require ('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');
const randomSzamokParosak=require('./szamgen');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/random'){
        const szamok = randomSzamokParosak(10, 20, 10);
     
        fs.writeFile('random.txt',szamok.join(','),'utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közbe!</h1>');
                return;
            }

            res.statusCode=200;
            res.end(`<h1>Random páros számok mentve!</h1><p>${szamok.join(', ')}</p>`);

          

        });
    }else if(req.url==='/kiir'){
        fs.readFile('random.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl olvasása közbe!</h1>');
                return;

            }
            res.statusCode=200;
            res.end(`<h1>Korábban mentett számok:</h1><p>${data}</p>`);


        });
    }else{
        res.statusCode=404;
        res.end('<h1>Hiba, az oldal nem található!</h1>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);
});