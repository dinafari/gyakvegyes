/*3. Node.js – Egy fájlos szerver
 Hozz létre egy szervert, amely:

/ útvonalon ad vissza HTML-t: <h1>Online Filmkatalógus</h1>

/filmek útvonalon ad vissza JSON-t:*/

const http =require ('http');

const hostname= '127.0.0.1';
const port= 3000;

const server= http.createServer((req,res)=>{

    if(req.url==='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>Online Filmkatalógus</h1>');

    }else if(req.url==='/filmek'){

        const filmek=[
            { cim: "Titanic", ev: 1997 },
            { cim: "A remény rabjai", ev: 1994 },
            { cim: "Eredet", ev: 2010 }

        ];

        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(filmek));

    }else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('<h1>404-Hiba az oladal nem található!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);

});