/*TypeScript – 3 logikai számítás (interfész nélkül)
    1. Két szám szorzatának utolsó számjegye
    Írj egy függvényt, amely visszaadja a két szám szorzatának utolsó számjegyét.
     Pl.: 7 × 6 = 42 → 2
*/
function ketszSzorzUtszamj(a, b) {
    var szorzatuk = a * b;
    return szorzatuk % 10; //A szam % 10 nem osztás, hanem osztási maradékot számol pl.101 % 10 === 1 ,mert :10X10 ==100 és  101 - 100 = 1, 
}
console.log(ketszSzorzUtszamj(7, 6));
//2. Tömbben megszámolni a hárommal osztható számokat
//Pl.: [3, 5, 6, 9, 11, 15] → Visszatér: 4
var tomb1 = [3, 5, 6, 9, 11, 15];
function oszthDBHarom(tomb1) {
    var oszthdbszam = tomb1.filter(function (szam) { return szam % 3 === 0; }).length;
    return oszthdbszam;
}
console.log(oszthDBHarom(tomb1));
/* Három szám közül a legnagyobb különbség
    Készíts függvényt, amely három szám közül megmondja a legnagyobb különbséget bármely két szám között.

    Pl.: 5, 12, 7 → Különbségek: 12–5 = 7, 12–7 = 5, 7–5 = 2 → Kimenet: 7
*/
function legnKul(x, y, z) {
    var kul1 = Math.abs(x - y);
    var kul2 = Math.abs(x - z);
    var kul3 = Math.abs(y - z);
    return Math.max(kul1, kul2, kul3);
}
console.log(legnKul(5, 12, 7));
