const http= require('http');
const hostname= '127.0.0.1';
const port= 3000;
const fs= require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');

    if(req.url==='/utvonal'){
        res.statusCode=200;
        res.end('<h1>Üdvözöllek az üzenetküldő oldalon!</h1>');

    }else if(req.url==='/uzenet'){
        fs.writeFile('uzenet.txt','Ez egy fontos üzenet a szervertől!',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl írása közben!</h2>');
                return;
            }

            fs.readFile('uzenet.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h2>Hiba a fájl olvasása közben!</h2>');
                    return;

                }
                res.statusCode=200;
                res.end(`<h2>${data}</h2><p>Üzenet mentve a fájlba!</p>`)

            });

        });

    }else if(req.url==='/megjelenit'){
        fs.readFile('uzenet.txt', 'utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl olvasása közben!</h2');
                return;
            }
            res.statusCode=200;
            res.end(`<h2>A fájl tartalma:</h2><p>${data}Üzenet mentve a fájlba!</p>`)
        });
    }else{
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!</h1>');
    }

});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);

});