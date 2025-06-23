// 1.Készíts egy függvényt, ami visszaadja a 10 és 100 közötti páratlan számok összegét
// Pl: [5, 12, 27, 99, 102, 3] → 27 + 99 = 126
function paratlTizSzaz(szamok) {
    var osszeg = 0;
    for (var _i = 0, szamok_1 = szamok; _i < szamok_1.length; _i++) {
        var szam = szamok_1[_i];
        if (szam > 10 && szam < 100 && szam % 2 !== 0) {
            osszeg += szam;
        }
    }
    return osszeg;
}
var szamtomb = [5, 12, 27, 99, 102,];
var eredmeny = paratlTizSzaz(szamtomb);
console.log("Összeg:", eredmeny); // 126
//Filterrel és reducc-alugyan ez:
/*function paratlanOsszegFilterReduce(tomb: number[]): number {
  return tomb
    .filter(szam => szam > 10 && szam < 100 && szam % 2 !== 0)
    .reduce((osszeg, aktualis) => osszeg + aktualis, 0);
   
}

// Tesztelés:
const bemenet = [5, 12, 27, 99, 102, 3];
const eredmeny = paratlanOsszegFilterReduce(bemenet);
console.log("Az összeg:", eredmeny); // 126 */
//2. Készíts egy függvényt, amely megszámolja, hány páros és hány páratlan szám van egy tömbben
// Kimenet: { paros: 3, paratlan: 2 }
var tomb = [2, 3, 8, 9, 10];
function parospartl(tomb) {
    var paratlan = tomb.filter(function (szam) { return szam % 2 !== 0; }).length;
    var paros = tomb.filter(function (szam) { return szam % 2 == 0; }).length;
    return {
        paratlan: paratlan,
        paros: paros
    };
}
console.log(parospartl(tomb));
//3. Készíts egy függvényt, amely visszaadja a Fibonacci sorozat első 5 páros számát
// Pl: [2, 8, 34, 144, 610]
function fibonParos(n) {
    var szam = 5;
    var elsosz = 0;
    var masodiksz = 1;
    var paroseredm = [];
    while (paroseredm.length < n) {
        var kovetkszam = elsosz + masodiksz;
        if (kovetkszam % 2 === 0) {
            paroseredm.push(kovetkszam);
        }
        elsosz = masodiksz;
        masodiksz = kovetkszam;
    }
    return paroseredm.slice(0, szam); //az elso 5 szamot adja  visza szam= 5;
}
console.log(fibonParos(5));
// 4.Készíts egy függvényt, amely visszaadja a tömb azon elemeit, amelyek kisebbek az átlaguknál
// Pl: [5, 10, 15, 20] → Átlag: 12.5 → Kimenet: [5, 10]
var szt = [5, 10, 15, 20];
function altAg(szt) {
    var osszeguk = szt.reduce(function (acc, curr) { return acc + curr; }); //összeadom a tömb elemeit
    var atl = osszeguk / szt.length; //itt megkapom az átlagot
    var kisebb = szt.filter(function (szam) { return szam < atl; }); //tömböt ad vissza ami kisebb mint az átlag
    return kisebb;
}
console.log(altAg(szt));
