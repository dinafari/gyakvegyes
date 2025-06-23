// 1.Hozz létre egy Dolgozat interfészt: nev: string, pontszam: number
// Adj hozzá legalább 3 dolgozatot, és számold ki az átlagpontszámot
var dolgozat1 = {
    nev: "Pisti",
    pontszam: 80,
};
console.log(dolgozat1);
var dolgozat2 = {
    nev: "Juli",
    pontszam: 100,
};
console.log(dolgozat2);
var dolgozat3 = {
    nev: "Sándor",
    pontszam: 50,
};
console.log(dolgozat3);
var dolgozatok = [dolgozat1, dolgozat2, dolgozat3];
function atlagPontsz(dolgozatok) {
    var atl = dolgozatok.reduce(function (acc, dolgozat) { return acc + dolgozat.pontszam; }, 0);
    return atl / dolgozatok.length;
}
console.log(atlagPontsz(dolgozatok));
// 2.Írj egy függvényt, amely visszaadja egy tömb prímszámait
// Pl: [2, 4, 5, 9, 11] → [2, 5, 11]
var szamok1 = [2, 4, 5, 9, 11];
function primek(szamok1) {
    return szamok1.filter(function (szam) {
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
;
console.log(primek(szamok1)); // [2, 5, 11]
// 3.Készíts egy függvényt, amely egy tömbből azokat a számokat adja vissza,
// amelyek 3-mal ÉS 5-tel is oszthatók
// Pl: [15, 30, 22, 45, 60] → [15, 30, 45, 60]
var szamok2 = [15, 30, 22, 45, 60];
function harommalésOtteloszth(szamok2) {
    var haromot = szamok2.filter(function (szam) { return szam % 3 === 0 && szam % 5 === 0; });
    return haromot;
}
console.log(harommalésOtteloszth(szamok2));
