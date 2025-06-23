/*  Feladat:
    Készíts egy Node.js szervert egyetlen .js fájlban, amely:

     / útvonalon:
    HTML-ben válaszoljon ezzel:



    <h1>Tanfolyam információk</h1>
    /tanfolyamok útvonalon:
        JSON tömböt adjon vissza:


    [
        { "nev": "Frontend fejlesztés", "oraszam": 80 },
        { "nev": "Backend fejlesztés", "oraszam": 100 },
        { "nev": "Fullstack képzés", "oraszam": 150 }
    ]
    /api/html útvonalon:
        HTML választ adjon:


    
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
        Technikai elvárás:
        Használd a http modult

        Legyen karakterkódolás beállítva: text/html; charset=utf-8 vagy application/json

     Válaszolj 404 hibával, ha az útvonal ismeretlen
     
*/
const http = require('http');

const hostname='127.0.0.1';

const port=3000;

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end('<h1>Tanfolyam információk</h1>');

    }else if(req.url==='/tanfolyamok'){

        const tanfolyamok=[
            { "nev": "Frontend fejlesztés", "oraszam": 80 },
            { "nev": "Backend fejlesztés", "oraszam": 100 },
            { "nev": "Fullstack képzés", "oraszam": 150 }

        ];
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(tanfolyamok));

    }else if(req.url==='/api/html'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end(`
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        `);

    }else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>404-Hiba az oldal nem található!</h1>')
    }
    
});

server.listen(port,hostname,()=>{
    console.log(`A szerver fut a http://${hostname}:${port} címen`);
});

