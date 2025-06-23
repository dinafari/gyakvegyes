const http= require('http');

const hostname='127.0.0.1';
const port=3000;

const server= http.createServer((req,res)=>{
  if(req.url==='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>Könyváruház</h1>');
    }else if(req.url==='/konyvek'){

        const konyvek=[
            {cim: "Jókai Mór- Az arany ember", ar: 4200},
            { cim: "Rejtő Jenő -A tizennégy karátos autó", ar: 3100 },
            { cim: "Móra Ferenc -Kincskereső kisködmön", ar: 2500 }
        ];


        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(konyvek));

    }else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>404 - Az oldal nem található</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`)

});