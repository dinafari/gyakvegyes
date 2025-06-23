/*Feladat:TypeScript – Interfész + számolás

Hozz létre egy Termek nevű interfészt a következő mezőkkel:

nev: string

ar: number

keszleten: boolean

Ezután hozz létre legalább 4 terméket, majd írj egy függvényt, amely:

 Visszaadja a készleten lévő termékek árainak összegét

*/

interface Termek{
    nev:string;
    ar:number;
    keszleten:boolean;
}


const termek1:Termek={
    nev:"nadrág",
    ar:4500,
    keszleten:true,

}
console.log(termek1);


const termek2:Termek={
    nev:"poló",
    ar:2500,
    keszleten:true,

}
console.log(termek2);



const termek3:Termek={
    nev:"sportcipő",
    ar:21500,
    keszleten:false,

}
console.log(termek3);



const termek4:Termek={
    nev:"kabát",
    ar:26000,
    keszleten:false,

}
console.log(termek4);

const termekek:Termek[]=[termek1,termek2,termek3,termek4];

function keszltaOssz(termekek:Termek[]):number{

    const keszl= termekek.filter(termek=>termek.keszleten);
    const osszeguk = keszl.reduce((acc,termek)=> acc + termek.ar,0);//Kezdoérték nélkül nem jó az mindig kell 0 az,
    return osszeguk;

}
console.log(keszltaOssz(termekek));

