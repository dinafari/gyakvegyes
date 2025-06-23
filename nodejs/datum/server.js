 /*   Készíts szervert, amely:

    /belepes útvonalon hozzáfűzi a log.txt fájlhoz: Belépés: [aktuális dátum és idő]

    /naplo útvonalon visszaadja a teljes fájlt <pre> HTML formázással.
    Használj fs.appendFile, fs.readFile függvényeket.   
*/


const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/belepes'){
        const datumIdo= new Date().toLocaleString();
        const uzenet=`Belépés:${datumIdo}\n`;
        fs.appendFile('log.txt',uzenet,'utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end('<h1>Sikeres hozzáfűzés a fájlhoz:Belépés:akuális dátum és idő!</h1>');

        });

    }else if(req.url==='/naplo'){
        fs.readFile('log.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<pre>${data}</pre>`);
        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba, az oldal nem található!Error!</h1>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});