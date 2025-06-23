//Egy tömbben [3, 5, 10, 15, 20, 22] számok vannak.
//1.Írj egy függvényt, ami visszaadja a 10-nél nagyobb páros számokat
var szamok = [3, 5, 10, 15, 20, 22];
function tiznNaParos(szamok) {
    var parossz = szamok.filter(function (szam) { return szam % 2 === 0; });
    var nagyobb = parossz.filter(function (szam) { return szam > 10; });
    return nagyobb;
    // vagy egy lépésben: return szamok.filter(szam => szam > 10 && szam % 2 === 0);
}
console.log("10-nél nagyobb páros számok:", tiznNaParos(szamok));
//2.Írj egy másik függvényt, ami megszámolja, hány szám osztható 5-tel
function oszthatoOtteldb(szamok) {
    var oszthato = 0;
    for (var _i = 0, szamok_1 = szamok; _i < szamok_1.length; _i++) {
        var szam = szamok_1[_i];
        if (szam % 5 === 0) {
            oszthato++;
        }
    }
    return {
        oszthato: oszthato,
    };
}
console.log("Ennyi db szám osztható öttel:", oszthatoOtteldb(szamok));
