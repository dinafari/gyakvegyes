/*       . Node.js – Fájlművelet
    Feladat:
    Hozz létre egy szervert, amely:

    / útvonalon kiírja: „Tanfolyam rendszer főoldal”

    /uj útvonalon hozzáfűz egy új tanfolyamot a fájlhoz (pl. Új tanfolyam: Vue.js)és kiírja , hogy :"Tanfolyam hozzáadva !"" a végén.

    /lista útvonalon visszaadja az összes eddigi tanfolyamot HTML listaként
*/



const http= require ('http');
const port=3000;
const hostname='127.0.0.1';

const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Tanfolyam rendszer főoldal</h1>');

    }else if(req.url==='/uj'){
        fs.appendFile('tanfolyam.txt','Új tanfolyam: Vue.js\n','utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl olvasása közben</h1>');
                return;
    
            }
            res.statusCode=200;
            res.end('<h1>Tanfolyam hozzáadva!</h1>');


        });

    }else if(req.url==='/lista'){
        fs.readFile('tanfolyam.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a  fájl írása közben</h1>');
                return;
            }
            const lista = data
            .split('\n')
            .filter(sor => sor.trim() !== '')
            .map(sor => `<li>${sor}</li>`)
            .join('');

            res.statusCode=200;
            res.end(`<h1>Tanfolyamok:</h1><ul>${lista}</ul>`);

        });


    }else{
        res.statusCode=404;
        res.end('<h1>Hiba , az oldal nem található!Error!</h1>');
    }
});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);
});