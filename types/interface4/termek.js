/*Feladat:TypeScript – Interfész + számolás

Hozz létre egy Termek nevű interfészt a következő mezőkkel:

nev: string

ar: number

keszleten: boolean

Ezután hozz létre legalább 4 terméket, majd írj egy függvényt, amely:

 Visszaadja a készleten lévő termékek árainak összegét

*/
var termek1 = {
    nev: "nadrág",
    ar: 4500,
    keszleten: true,
};
console.log(termek1);
var termek2 = {
    nev: "poló",
    ar: 2500,
    keszleten: true,
};
console.log(termek2);
var termek3 = {
    nev: "sportcipő",
    ar: 21500,
    keszleten: false,
};
console.log(termek3);
var termek4 = {
    nev: "kabát",
    ar: 26000,
    keszleten: false,
};
console.log(termek4);
var termekek = [termek1, termek2, termek3, termek4];
function keszltaOssz(termekek) {
    var keszl = termekek.filter(function (termek) { return termek.keszleten; });
    var osszeguk = keszl.reduce(function (acc, termek) { return acc + termek.ar; }, 0); //Kezdoérték nélkül nem jó az mindig kell 0 az,
    return osszeguk;
}
console.log(keszltaOssz(termekek));
