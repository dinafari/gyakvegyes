/*  3. Node.js – Adatkezelés szerverrel
    Feladat: napló mappa futtasd le
    Hozz létre egy szervert, amely:

    /hozzaad útvonalon hozzáfűzi a naplo.txt fájlhoz: Új bejegyzés: [dátum és idő]

    /megtekint útvonalon visszaadja a napló teljes tartalmát HTML <pre> formátumban
*/


const http=require('http');
const port=3000;
const hostname='127.0.0.1';

const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/hozzaad'){
        const datumIdo=new Date().toLocaleString(); // pl.: 2025.06.14. 13:45:12
        const uzenet=`Új bejegyzés: ${datumIdo}\n`;
        fs.appendFile('naplo.txt',uzenet,'utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end('<h1>Sikeres hozzáfűzés a naplóhoz!</h1>');

        });
    }else if(req.url==='/megtekint'){
        fs.readFile('naplo.txt','utf-8',(err,data)=>{
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
        res.end('<h1>Hiba, az oldal nem található!Error</h1>');
    }


});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);
});