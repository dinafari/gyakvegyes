/*1. Interfész: SzámPár
 Hozz létre egy SzamPar interfészt két számmal (a, b), majd egy függvény adja vissza a számok szorzatát.
*/ 


interface Szampar{
    a:number;
    b:number;
}

const szamparok:Szampar[]=[
    { a: 3 , b: 6 },
    { a: 2, b:5 }, // akár hozzá is adhatsz még egyet

];
console.log(szamparok);




function szamprarSzorzata(szamparok:Szampar[]):{a:number,b:number,szorzat:number}[]{

    return szamparok.map(szampar=>({a:szampar.a, b:szampar.b,szorzat:szampar.a*szampar.b}));

    
       
}
console.log("Számpárok szorzata:",szamprarSzorzata(szamparok));



/*2. Páratlan számok listája
 Írj egy függvényt, amely egy tömbből visszaadja csak a páratlan számokat.
    Bemenet: [1, 4, 7, 10, 11] → Kimenet: [1, 7, 11]

*/

const tomb2:number[]=[1, 4, 7, 10, 11]

function kivParatl(tomb2:number[]):number[]{
    const paratl=tomb2.filter((szam)=>szam %2 !==0);
    return paratl;

}
console.log("Páratlan számok listája a tömbből:",kivParatl(tomb2));

/*
    3. Átlag + döntés
    Készíts egy Jegy interfészt (nev, jegy), és írd meg azt a függvényt, ami:

    kiszámolja az átlagot

    visszaadja, hogy „Sikeres” vagy „Sikertelen” az átlag alapján (legalább 2.5 = sikeres)


*/

interface Jegy{
    nev:string;
    jegy:number;
}

const jegyek: Jegy[] = [
  { nev: "Géza", jegy: 3 },
  { nev: "Juli", jegy: 4 },
  { nev: "Peti", jegy: 2 }
];

function sikervSikert(jegyek:Jegy[]):{atlag:number,eredmeny:string}{

    
    const osszeguk= jegyek.reduce((acc,jegy)=>acc+jegy.jegy,0);

    const atlaguk= osszeguk/jegyek.length;

    return{
        atlag:atlaguk,
        eredmeny:atlaguk >=2.5 ? "Sikeres" : "Sikertelen"
    };

}
console.log(sikervSikert(jegyek));