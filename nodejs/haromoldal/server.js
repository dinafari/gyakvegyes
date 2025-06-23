/* Szerver 3 útvonallal:

    / → “Visszajelzés oldal”

    /uj → vissza.txt fájlba ír: "Új visszajelzés: Kiváló tanfolyam!"

    /ossz → fájl visszaolvasása és megjelenítése HTML formában*/


const http= require ('http');
const port=3000;
const hostname='127.0.0.1';

const fs= require ('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Visszajelzés oldal</h1>');

    }else if(req.url==='/uj'){//hozzáadja újra és újra a szöveget nem pedig felülírja mint a writefile
        fs.appendFile('vissza.txt','Új visszajelzés: Kiváló tanfolyam\n!',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a file írása közben!</h1>');
                return;
            }

            fs.readFile('vissza.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a file olvasása közben!</h1>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);

            });
            

        });

    }else if(req.url==='/ossz'){
        fs.readFile('vissza.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a file olvasása közben!</h1>');
                return;
            }

            res.statusCode=200;
            res.end(`<h1>A fájl tatralma:</h1><p>${data}</p>`);


        });
        

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!Error!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);

});
