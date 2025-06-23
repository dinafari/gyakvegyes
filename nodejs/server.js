const http= require('http');
const hostname = '127.0.0.1';
const port= 3000;

const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html; charset=utf-8');

    if(req.url==='/'){
        res.end('<h1>Üdvözöllek vendég!</h1>');

    }else if(req.url==='/nap'){
        const napok = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
        const ma= new Date().getDay(); // 0–6 között visszaadja a nap indexét
        const napnev=napok[ma]; 

        res.end(`<p>Ma: ${napnev}van.</p>`);


    }else{
        res.statusCode=404;
        res.end('<h1>Hiba!Az oldal nem található</h1>');
    }



});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen!`);

});
