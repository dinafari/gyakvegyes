const http = require ('http');

const hostname='127.0.0.1';

const port= 3000;


const server= http.createServer((req,res)=>{
   
    if(req.url==='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>Időjárás szolgáltatás</h1>');

    }else if(req.url==='/varosok'){
        const varosok= [
            { nev: "Budapest", homerseklet: "24°C" },
            { nev: "Debrecen", homerseklet: "22°C" },
            { nev: "Szeged", homerseklet: "26°C" }
        ];
       

        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(varosok));


    }else if(req.url==='/tavasz'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<p>Tavaszi idő: 16-22 fok</p>');

    }else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>404 - Az oldal nem található</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);

});