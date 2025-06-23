/*TypeScript – 3 matematikai-logikai feladat

    1. Tömb páros indexű elemeinek összege
    Írj egy függvényt, amely visszaadja egy tömb páros indexű elemeinek összegét!
 Pl.: [10, 20, 30, 40] → 10 + 30 = 40
*/
var tomb = [10, 20, 30, 40];
function parosIndex(tomb) {
    var parosindexelemek = tomb.filter(function (_, index) { return index % 2 === 0; }); //indexek elemét szűri, hogy pl.páros-e
    return parosindexelemek.reduce(function (a, b) { return a + b; }, 0);
}
console.log(parosIndex(tomb)); // ➜ 40
//2.Számjegyek összege négyzetszám-e?
//észíts függvényt, amely eldönti, hogy egy szám számjegyeinek összege négyzetszám-e!
// // Pl.: 123 → 1+2+3=6 → nem, 81 → 8+1=9 → igen
function szamjegyekOssz(n) {
    var szamsorra = n.toString().split('').map(Number);
    var osszege = szamsorra.reduce(function (a, b) { return a + b; }, 0);
    return Math.sqrt(osszege) % 1 === 0; //→  ha gyökvonás után nincs tizedesrész, akkor négyzetszám volt!
}
console.log(szamjegyekOssz(123)); //➜ false
console.log(szamjegyekOssz(81)); // ➜ true
//3.Tömb legnagyobb különbsége
//Készíts függvényt, amely visszaadja egy tömb két eleme közötti legnagyobb különbséget!
//Pl.: [3, 10, 5, 1] → 10 - 1 = 9
var tomb2 = [3, 10, 5, 1];
function legNKul(tomb2) {
    var max = Math.max.apply(Math, tomb2);
    var min = Math.min.apply(Math, tomb2);
    var kul = Math.abs(max - min);
    return kul;
}
console.log(legNKul(tomb2)); // ➜ 9
