//1. Prímszűrő
//Feladat:
//Írj egy függvényt, amely visszaadja egy tömbben található prímszámokat.
// Példa:bemenet: [2, 3, 4, 5, 6, 7, 8, 9] → kimenet: [2, 3, 5, 7]
/*  Mit csinál ez?
    filter() minden számra lefut

    szam < 2 → nem prímszám

    Prím ellenőrzés: nincs osztója 2-től √n-ig

    Ha talál osztót, false → nem prím

    Ha nem talál osztót, true → prím
*/
//Első verzió:
function primek(szamok) {
    return szamok.filter(function (szam) {
        if (szam < 2)
            return false;
        for (var i = 2; i <= Math.sqrt(szam); i++) {
            if (szam % i === 0) {
                return false;
            }
        }
        return true;
    });
}
console.log(primek([2, 3, 4, 5, 6, 7, 8, 9])); //→ kimenet: [2, 3, 5, 7]
//vagy:2.verzió:
function PrmE(szt) {
    var szur = szt.filter(function (szam) { szam > 2; for (var i = 2; i <= Math.sqrt(szam); i++) {
        if (szam % i === 0) {
            return false;
        }
    } return true; });
    return szur;
}
console.log("az eredmény:", PrmE([2, 3, 4, 5, 6, 7, 8, 9]));
//2.Feladat:Átló hossza
//Készíts egy függvényt, amely megkapja egy téglalap szélességét és magasságát, és kiszámolja az átlóját.
// Képlet: √(a² + b²)
//atló(3, 4) → 5
function atloHossz(x, y) {
    var atlo = Math.sqrt(x * x + y * y);
    return atlo;
}
console.log(atloHossz(3, 4));
//3. Medián kiszámítása
//Feladat:
//Készíts egy függvényt, amely egy számokat tartalmazó tömbből 
// kiszámítja a mediánt (középső érték). Páros elemszám esetén a két középső átlaga.
//[1, 3, 5] → 3
//[2, 4, 6, 8] → (4 + 6) / 2 = 5
//(n) páros, akkor a medián a n/2. és a (n/2 + 1).
//(n) páratlan, akkor a medián a (n+1)/2.
function meridian(tomb) {
    var sorted = tomb.sort(function (a, b) { return a - b; });
    var middle = Math.floor(sorted.length / 2); //Medián –  Itt a tömb hosszát kell nézni,hogy az páros vagy páratlan,. 
    if (sorted.length % 2 !== 0) {
        return sorted[middle]; //Középső érték kiválogatása
    }
    else {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
}
console.log(meridian([1, 3, 5])); // 3
console.log(meridian([2, 4, 6, 8])); // 5
var konyvek = [
    { cim: "Kiskutyák és szokásaik", szerzo: "Kutyás Béla", ar: 4000 },
    { cim: "Az Angolnák kihalása", szerzo: "Halas Bence", ar: 12000 },
    { cim: "A nagy zöldséges könyv", szerzo: "Retek ZSolt", ar: 10000 },
    { cim: "Gyömölcsfák gondozása", szerzo: "Alma Éva", ar: 7000 },
];
console.log(konyvek);
function otezerAlattnevtarta(konyvek) {
    var otalatt = konyvek.filter(function (konyv) { return konyv.ar < 5000 && konyv.szerzo.toLowerCase().includes("a"); });
    return otalatt;
}
console.log(otezerAlattnevtarta(konyvek));
