/*  Node.js 
    Feladat:
    Hozz létre egy szervert, amely:

    A /ido útvonalon visszaadja az aktuális időt HH:MM:SS formátumban.

    A /json útvonalon küldj vissza egy JSON-t például:

    { "nev": "Edina", "tanfolyam": "Fullstack", "aktiv": true } 
*/


const http=require('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');


const server=http.createServer((req,res)=>{

    if(req.url==='/ido'){

        const datum = new Date();
        const ora = datum.getHours().toString().padStart(2, '0');//padStart(2, '0') → 08:01:04 formátum
        const perc = datum.getMinutes().toString().padStart(2, '0');
        const mp = datum.getSeconds().toString().padStart(2, '0');
        const idoString = `${ora}:${perc}:${mp}\n`;
     
        // Fájlba naplózás (csendesen):
        fs.appendFile('aktualis.txt',idoString,'utf-8',(err)=>{
            if(err){
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1><Hiba a fájl írása közben!</h1>');
                return;

            }  // Csak az idő visszaadása:
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(idoString.trim());
        });
        
    }else if(req.url==='/json'){

        const adat= {"nev": "Edina", "tanfolyam": "Fullstack", "aktiv": true};
        
        
        res.writeHead(200, { 'Content-Type': 'application/json' });// elegáns fejléckezelés így is lehet ,egy sorba statusCode és content type
        res.end(JSON.stringify(adat));


    }else{
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Error!Hiba az oldal nem található!</h1>');
    }



});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a  http://${hostname}:${port} címen!`);
});