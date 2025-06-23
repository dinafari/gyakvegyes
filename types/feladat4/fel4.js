//1.Számold meg, hány szám osztható 3-mal egy number[] tömbben
var number = [9, 3, 5, 21, 77, 2];
function oszthHarommal(number) {
    var oszth = number.filter(function (szam) { return szam % 3 === 0; }).length;
    return oszth;
}
console.log(oszthHarommal(number) + "db");
//2.Készíts egy függvényt, ami visszaadja a 10-nél nagyobb számokat
var tesztesetek = [1, 3, 6, 10, 12, 66, 83, 44];
function tiznelnagyobb(tesztesetek) {
    var nagyotiz = tesztesetek.filter(function (szam) { return szam > 10; });
    return nagyotiz;
}
console.log(tiznelnagyobb(tesztesetek));
//3.Írj egy Diak interfészt, és számold ki több tanuló átlageredményét
//4.Készíts egy függvényt, amely visszaadja a 100 alatti négyzetszámokat
function tizalattNegyz(count, min, max) {
    if (min === void 0) { min = 2; }
    if (max === void 0) { max = 100; }
    var ujszamok = [];
    if (min % 2 !== 0) {
        min++;
    }
    while (ujszamok.length < count) {
        var randomp = Math.floor(Math.random() * ((max - min) / 2 + 1)) * 2 + min;
        if (!ujszamok.includes(randomp)) {
            ujszamok.push(randomp);
        }
    }
    return ujszamok.filter(function (szam) { return szam % 4 === 0; });
}
console.log(tizalattNegyz(98));
