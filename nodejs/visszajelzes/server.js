const http= require('http');
const port=3000;
const hostname='127.0.0.1';
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Visszajelzés oldal</h1>')

    }else if(req.url==='/ment'){

        fs.writeFile('ment.txt','Köszönjük a visszajelzest',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása közben!</h1>');
                return;
            }

            fs.readFile('ment.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h1>Hiba a fájl olvasása közben!</h1>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);
            });


        });


    }else if(req.url==='/visszaolvas'){
        fs.readFile('ment.txt','utf-8',(err,data)=>{
            if (err){
                res.statusCode=500;
                res.end('<h1>Hiba a fájl írása olvasása!</h1>');
                return;
            }
            res.statusCode=200;
            res.end(`<h1>${data}</h1>`);

        });

    }else {
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!</h1>');
    }
});


server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);

});