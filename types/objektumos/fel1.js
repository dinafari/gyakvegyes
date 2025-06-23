// 1.Add vissza azokat a termékeket, amelyek ára meghaladja a 10.000 Ft-ot!
var termekek = [
    { nev: 'Laptop', ar: 150000 },
    { nev: 'Egér', ar: 3000 },
    { nev: 'Monitor', ar: 45000 },
    { nev: 'Toll', ar: 900 }
];
// Hozd létre a szűrőfüggvényt!
function aranagyobbTizezer(termekek) {
    var dragabb = termekek.filter(function (termek) { return termek.ar > 10000; });
    return dragabb;
}
console.log(aranagyobbTizezer(termekek));
// 2.Írj egy függvényt, amely egy számot kap paraméterül, és visszaadja az első számjegyét!
// Pl.: 4582 → 4
function elsoSzamj(n) {
    var szamma = n.toString().split('').map(Number);
    return szamma[0]; //elso szam indexe
}
console.log(elsoSzamj(4582));
// 3.Szűrd ki azokat a szavakat a tömbből, amelyek hosszabbak 6 karakternél!
// Pl.: ['asztal', 'programozás', 'tanul', 'gépezet'] → ['programozás', 'gépezet']
var szavaktomb = ['asztal', 'programozás', 'tanul', 'gépezet'];
function hosszabbMintHat(szavaktomb) {
    var hossza = szavaktomb.filter(function (szo) { return szo.length > 6; });
    return hossza;
}
console.log(hosszabbMintHat(szavaktomb));
