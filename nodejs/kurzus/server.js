/* Node.js
    Hozz létre szervert, amely:

    / → "Tanfolyam oldal"

    /uj → fájlba ír: "Új tanfolyam: JavaScript Mesterkurzus"

    /lista → visszaolvassa a fájl tartalmát 
*/



const http= require ('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Tanfolyam oldal</h1>');

    }else if(req.url==='/uj'){
        fs.writeFile('uj.txt','<h1>Új tanfolyam:Javascript mesterkurzus</h1>','utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fálj írása közben</h1>');
                return;

            }

            fs.readFile('uj.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl  olvasása közben!</h1>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);


            });
            



        });

    }else if(req.url==='/lista'){
        fs.readFile('uj.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>HIba a fájl olvasása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<h1>${data}</h1>`);

        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba!Az oldal nem található!Error, page not found!</h1>');
    }

    

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
})