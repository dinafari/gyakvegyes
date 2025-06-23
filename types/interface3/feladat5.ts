//Készíts egy Dolgozo interfészt:

//Hozz létre legalább 3 dolgozót
//Készíts egy függvényt, ami visszaadja azok nevét, akiknek a fizetése nagyobb mint 350000

interface Dolgozo{
    nev:string;
    fizetes:number;
    beosztas:string;
}

const dolgozo1:Dolgozo={
    nev:"Kiss Géza",
    fizetes:340000,
    beosztas:"Takarító",

}
console.log(dolgozo1);



const dolgozo2:Dolgozo={
    nev:"Földesi Anett",
    fizetes:700000,
    beosztas:"IT",

}
console.log(dolgozo2);



const dolgozo3:Dolgozo={
    nev:"Kovács Józsi",
    fizetes:680000,
    beosztas:"Postás",

}
console.log(dolgozo3);

const dolgozok:Dolgozo[]=[dolgozo1,dolgozo2,dolgozo3];


function fizetesNagyoHo(dolgozok:Dolgozo[]):string[]{
   return dolgozok.filter(dolgozo=>dolgozo.fizetes > 350000)
    .map(dolgozo=>dolgozo.nev);
   

}
console.log(fizetesNagyoHo(dolgozok));