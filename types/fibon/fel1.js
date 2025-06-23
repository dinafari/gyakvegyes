/*1. Törtek összeadása
Készíts egy függvényt, amely két törtet (pl. 1/2 és 1/3) összead, és egyszerűsített formában visszaadja.
(Használhatsz közös nevezőt, LNKO-t is.)*/
function lnko(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function tortetOsszead(sz1, ne1, sz2, ne2) {
    var közösNevező = ne1 * ne2;
    var újSzámláló = sz1 * ne2 + sz2 * ne1;
    var oszto = lnko(újSzámláló, közösNevező);
    return {
        szamlalo: újSzámláló / oszto,
        nevezo: közösNevező / oszto
    };
}
console.log(tortetOsszead(1, 2, 1, 3)); // → { szamlalo: 5, nevezo: 6 }
/*2. Szám faktoriálisa
Készíts egy függvényt, amely visszaadja egy szám faktoriálisát.
Pl.: 5! → 120*/
function faktorialis(n) {
    //Képlete: n*(n-1)*(n-2);
    var eredm = 1;
    for (var i = 1; i <= n; i++) {
        eredm *= i; //eredmények szorzata
    }
    return eredm;
}
console.log(faktorialis(5));
/*3. Fibonacci-sorozat n. eleme
Írj egy függvényt, amely visszaadja a Fibonacci-sorozat n. elemét!
Pl.: fibonacci(6) → 8*/
function fibonacci(eleme) {
    if (eleme === 0)
        return 0;
    if (eleme === 1)
        return 1;
    return fibonacci(eleme - 1) + fibonacci(eleme - 2); //→ 8
}
console.log(fibonacci(6)); //
/*Gyorsabb megoldás nagy számokra:

    function fibonacciGyors(n: number): number {
        if (n === 0) return 0;
        if (n === 1) return 1;

        let elso = 0;
        let masodik = 1;
        let kovetkezo = 0;

        for (let i = 2; i <= n; i++) {
            kovetkezo = elso + masodik;
            elso = masodik;
            masodik = kovetkezo;
        }

        return masodik;
    }

    console.log(fibonacciGyors(6)); // → 8
    console.log(fibonacciGyors(10)); // → 55
    console.log(fibonacciGyors(30)); // → 832040  gyors!






*/
/*4. Számjegyek szorzata
Adj vissza egy szám számjegyeinek szorzatát!
Pl.: 234 → 2×3×4 = 24 */
function szamjSzozrzata(szamj) {
    var szorzat = szamj.toString().split('').map(Number);
    return szorzat.reduce(function (acc, curr) { return acc * curr; });
}
console.log(szamjSzozrzata(234));
