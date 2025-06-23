const http= require('http');
const hostname='127.0.0.1';
const port=3000;
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if(req.url==='/'){
        res.statusCode=200;
        res.end('<h1>Online Oktatás</h1>');

    }else if(req.url==='/temak'){
        fs.writeFile('temak.txt','<h3>HTML, CSS, JavaScript, Node.js, Angular</h3>','utf-8',(err)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl írása közben!</h2>');
                return;
            }

            fs.readFile('temak.txt','utf-8',(err,data)=>{
                if(err){
                    res.statusCode=500;
                    res.end('<h2>Hiba a fájl olvasása közben!</h2>');
                    return;
                }
                res.statusCode=200;
                res.end(`${data}`);
            });

            

        });

    }else if(req.url==='/listaz'){
        fs.readFile('temak.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode=500;
                res.end('<h2>Hiba a fájl olvasása közben!</h2>');
                return;
            }
            res.statusCode=200;
            const listaelemek = data.split(', ').map(tema => `<li>${tema}</li>`).join('');//Ha szeretnéd valódi listaelemként, szét is darabolhatod split(', ') szerint:
            res.end(`<ul>${listaelemek}</ul>`);

          
        });

    }else{
        res.statusCode=404;
        res.end('<h1>Hiba az oldal nem található!</h1>');
    }


});

server.listen(port,hostname,()=>{
    console.log(`A server fut a http://${hostname}:${port} címen`);
});