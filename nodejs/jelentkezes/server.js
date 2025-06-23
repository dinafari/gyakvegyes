/*    3. Node.js – Fájlírás és olvasás

    jelentkezes mappába van.
    
    Hozz létre egy szervert, amely:

    /uj útvonalon hozzáfűzi: Jelentkezés érkezett: Edina

    /lista útvonalon visszaadja a fájl összes sorát HTML listaként

    A fájl neve legyen pl. jelentkezok.txt 
*/


const http= require('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8')

    if(req.url==='/uj'){//Itt csak később tettem li-be ezért van az első sor az első betöltés után egymás mellett és az appendfile nem írja felül igy benne hagytam :) txt-ből is törölhetem akár manuálisan?
        fs.appendFile('jelentkezok.txt','<li>Jelentkezés érkezett: Edina\n</li>','utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }
            res.statusCode=200;
            res.end('<h1>Hozzáfűzve a fájlhoz:Jelentkezés érkezett:Edina</h1>');
        });

    }else if(req.url==='/lista'){
        fs.readFile('jelentkezok.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<h1>A fájl tartalma:</h1><li>${data}</li>`);

        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba, az oldal nem található!Error!</h1>');
    }


});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);
});
