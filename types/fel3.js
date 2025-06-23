//1.Páros és páratlan számok megszámlálása
//Készíts egy függvényt, amely megszámolja, hány páros és hány páratlan szám van egy tömbben.
// Bemenet: [1, 2, 3, 4, 6]
// Kimenet: { paros: 3, paratlan: 2 }
var bemenet2 = [1, 2, 3, 4, 6];
function paroParatl(bemenet2) {
    var paros = bemenet2.filter(function (szam) { return szam % 2 === 0; }).length;
    var paratl = bemenet2.filter(function (szam) { return szam % 2 !== 0; }).length;
    return {
        paros: paros,
        paratl: paratl
    };
}
console.log("Páros és páratlan számok db száma:", paroParatl(bemenet2));
//1 a.Irj egy függvényt ami ellenőrzi egy számról, hogy páros e vagy páratlan
function parPl(n) {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("A szám:", parPl(10));
// 1 b.Készíts egy függvényt, a páros és páratlan számok összegét
// Pl: const bemenet2:number[]=[1, 2, 3, 4, 6] páratlanosszeg:4  párososszeg:12
function parosszParoszz(bemenet2) {
    var parososszeg = 0;
    var paratlosszeg = 0;
    for (var _i = 0, bemenet2_1 = bemenet2; _i < bemenet2_1.length; _i++) {
        var szam = bemenet2_1[_i];
        if (szam % 2 === 0) {
            parososszeg += szam;
        }
        if (szam % 2 !== 0) {
            paratlosszeg += szam;
        }
    }
    return {
        parososszeg: parososszeg,
        paratlosszeg: paratlosszeg
    };
}
console.log("Összes páros szám összege és az összes páratlan szám összege:", parosszParoszz(bemenet2));
//2. Fibonacci sorozat első 5 páros száma
//Készíts egy függvényt, amely visszaadja a Fibonacci-sorozat első 5 páros számát.
// Kimenet: [2, 8, 34, 144, 610]
function fibParos(n) {
    var elsosz = 0;
    var masodiksz = 1;
    var vegeredmeny = [];
    while (vegeredmeny.length < n) {
        var kovetkezosz = elsosz + masodiksz;
        if (kovetkezosz % 2 === 0) {
            vegeredmeny.push(kovetkezosz);
        }
        elsosz = masodiksz;
        masodiksz = kovetkezosz;
    }
    return vegeredmeny;
}
console.log("Fibonacci-sorozat első 5 páros száma:", fibParos(5)); //Itt szabom meg hány db páros számot kérek vissza a sorozatból
//3.Számok átlag alatti kiszűrése
//Készíts egy függvényt, amely visszaadja a tömb azon elemeit, amelyek kisebbek az átlaguknál.
// Bemenet: [5, 10, 15, 20]
// Átlag: 12.5 → Kimenet: [5, 10]
var bemenet3 = [5, 10, 15, 20];
function atlAlatt(bemenet3) {
    var osszead = bemenet3.reduce(function (acc, curr) { return acc + curr; });
    var atl = osszead / bemenet3.length;
    var kisebbeknala = bemenet3.filter(function (szam) { return szam < atl; });
    return kisebbeknala;
}
console.log("Számok amik kisebbek az össz tömb átlagánál:", atlAlatt(bemenet3));
