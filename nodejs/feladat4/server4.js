/*5. Node.js (egy fájlban!)
Feladat:
Készíts egy szervert, amely:
A  / útvonalon visszaad egy HTML: „Üdv az időjárás oldalon!”
Az  /adat útvonalon JSON-ként ad vissza egy tömböt, 
amiben 3 város van és az aktuális hőmérsékletük. 

-A JSON visszatérés nem HTML, hanem valódi application/json kell legyen!*/        




const http=require ('http');

const hostname='127.0.0.1';
const port=3000;

const server = http.createServer((req,res)=>{
    

    if(req.url==='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end('<h1>Üdv az időjárás oldalon!</h1>');

    }else if(req.url==='/adat'){
        const varosok =[
            { nev: 'London', homerseklet: '15°C' },//A JSON visszatérés nem HTML, hanem valódi application/json kell legyen
            { nev: 'Florida', homerseklet: '28°C' },
            { nev: 'Chicago', homerseklet: '10°C' }
        ];

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(varosok));
        
     
    }else{
        res.statusCode=404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Hiba! Az oldal nem található</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);
});