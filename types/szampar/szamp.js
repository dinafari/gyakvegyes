/*1. Interfész: SzámPár
 Hozz létre egy SzamPar interfészt két számmal (a, b), majd egy függvény adja vissza a számok szorzatát.
*/
var szamparok = [
    { a: 3, b: 6 },
    { a: 2, b: 5 }, // akár hozzá is adhatsz még egyet
];
console.log(szamparok);
function szamprarSzorzata(szamparok) {
    return szamparok.map(function (szampar) { return ({ a: szampar.a, b: szampar.b, szorzat: szampar.a * szampar.b }); });
}
console.log("Számpárok szorzata:", szamprarSzorzata(szamparok));
/*2. Páratlan számok listája
 Írj egy függvényt, amely egy tömbből visszaadja csak a páratlan számokat.
    Bemenet: [1, 4, 7, 10, 11] → Kimenet: [1, 7, 11]

*/
var tomb2 = [1, 4, 7, 10, 11];
function kivParatl(tomb2) {
    var paratl = tomb2.filter(function (szam) { return szam % 2 !== 0; });
    return paratl;
}
console.log("Páratlan számok listája a tömbből:", kivParatl(tomb2));
var jegyek = [
    { nev: "Géza", jegy: 3 },
    { nev: "Juli", jegy: 4 },
    { nev: "Peti", jegy: 2 }
];
function sikervSikert(jegyek) {
    var osszeguk = jegyek.reduce(function (acc, jegy) { return acc + jegy.jegy; }, 0);
    var atlaguk = osszeguk / jegyek.length;
    return {
        atlag: atlaguk,
        eredmeny: atlaguk >= 2.5 ? "Sikeres" : "Sikertelen"
    };
}
console.log(sikervSikert(jegyek));
