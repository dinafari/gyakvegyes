//Készíts függvényt, amely kiszámolja a páros számok átlagát egy tömbben.
//Pl.: [2, 3, 4, 5] → (2+4)/2 = 3
var szambtomb = [2, 3, 4, 5];
function parosAtl(szambtomb) {
    var paros = szambtomb.filter(function (szam) { return szam % 2 === 0; });
    var osszeguk = paros.reduce(function (acc, curr) { return acc + curr; }, 0);
    return osszeguk / paros.length;
}
console.log("A páros számok átlaga a szamtomben:", parosAtl(szambtomb));
