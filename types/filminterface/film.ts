/*1. TypeScript – Logikai tömbös feladat
 Hozz létre egy Film interfészt, amely tartalmazza:

    cim: string

    ev: number

    kategoria: string

 Adj hozzá legalább 3 filmobjektumot
 Készíts egy függvényt, amely visszaadja azokat a filmeket, amik 2000 után készültek és "dráma" kategóriájúak
*/


interface Film{
    cim:string;
    ev:number;
    kategoria:string;
}

const film1:Film={
    cim:"A bálnák világa",
    ev:1999,
    kategoria:"Természetfilm",
}
console.log(film1);



const film2:Film={
    cim:"Pandémia",
    ev:2023,
    kategoria:"Dráma",
}
console.log(film2);




const film3:Film={
    cim:"Elveszett életek",
    ev:2001,
    kategoria:"Dráma",
}
console.log(film3);

const filmek:Film[]=[film1,film2,film3];

function ketezerUtnDrama(filmek:Film[]):Film[]{

    const utan=filmek.filter(ev=>ev.ev > 2000); 

    const drama=utan.filter(film=>film.kategoria.toLowerCase()==="dráma");
    return drama;


}
console.log(ketezerUtnDrama(filmek));


//2.Visszaadni csak a 2000 előtt készült Film típusú objektumokat ami nem dráma


function noDramaKetEzelott(filmek:Film[]):Film[]{
    const elotti=filmek.filter(film=>film.ev < 2000);
    const nemd=elotti.filter(film=>film.kategoria.toLowerCase()!=="dráma");
    return nemd;
}
console.log(noDramaKetEzelott(filmek));

