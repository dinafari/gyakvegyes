/* Node.js (1 fájlban!)
Feladat: Készíts egy egyszerű szervert

   - A / útvonalon visszaad egy HTML választ:
    „Üdvözöllek a termékoldalon!”
 - A /velemeny útvonalon:
    -létrehoz egy velemeny.txt fájlt ezzel a szöveggel:
    „Kiváló termék, gyors szállítás!”
 -és HTML formázással meg is jeleníti a tartalmát
 -Mindent egyetlen .js fájlban valósíts meg!  */

const http = require ('http');
const fs = require('fs');


const hostname='127.0.0.1';
const port=3000;

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    
    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Üdvzöllek a termekoldalon!</h1>');
       
    }else if(req.url==='/velemeny'){
        fs.writeFile('velemeny.txt','Kiváló termék,gyors szállítás!',(err)=>{
            if(err){
                res.statusCode= 500;
                res.end(`<h2>Hiba a fájl írása közben!</h2>`);
                return;
            }

            fs.readFile('velemeny.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end(`<h2>Hiba a fájl olvasása közben!</h2>`);
                    return;
                }
                res.statusCode=200;
                res.end(`<h2>${data}</h2>`);

            });



        });


    }else{
        res.statusCode=404;
        res.end(`<h1>Hiba az oldal nem található!</h1>`);
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
})