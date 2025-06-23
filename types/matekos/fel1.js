/*  TypeScript – 3 feladat (idő: 30 perc összesen) ez futtasd le!
1. Két szám különbségének abszolút értéke:
Készíts egy függvényt, amely két szám különbségének abszolút értékét adja vissza.
(Pl.: 10, 15 → 5)*/
function abszolutE(a, b) {
    var kul = Math.abs(a - b);
    return kul;
}
console.log(abszolutE(10, 15));
/*2. Legnagyobb és legkisebb szám különbsége:
    Adj meg egy tömböt, és készíts függvényt, amely visszaadja a legnagyobb és legkisebb szám különbségét.*/
var tomb1 = [1, 3, 11, 4, 5];
function legnLegkKul(tomb1) {
    var max = Math.max.apply(Math, tomb1);
    var min = Math.min.apply(Math, tomb1);
    var kulombseguk = max - min;
    return kulombseguk;
}
console.log(legnLegkKul(tomb1));
/* 3.  3 szám számtani közepe:
    Add vissza három szám számtani közepét (átlagát), és döntsd el:
    Ha az átlag egész szám → "Egész átlag"
    Ha nem → "Tört átlag"

*/
//Ha csak azt szeretnéd eldönteni, hogy egy szám egész-e vagy sem, akkor mindig a Number.isInteger() a legpontosabb út.
function szamtaniKozep(x, y, z) {
    var atlag = (x + y + z) / 3;
    if (Number.isInteger(atlag)) {
        return { atlag: atlag, tipus: "egész szám" };
    }
    else {
        return { atlag: atlag, tipus: "tört szám" };
    }
}
console.log(szamtaniKozep(3, 6, 9)); // ➜ { atlag: 6, tipus: 'egész szám' }
console.log(szamtaniKozep(2, 5, 9)); // ➜ { atlag: 5.333..., tipus: 'tört szám' }
