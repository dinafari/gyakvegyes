//Készíts egy Dolgozo interfészt:
var dolgozo1 = {
    nev: "Kiss Géza",
    fizetes: 340000,
    beosztas: "Takarító",
};
console.log(dolgozo1);
var dolgozo2 = {
    nev: "Földesi Anett",
    fizetes: 700000,
    beosztas: "IT",
};
console.log(dolgozo2);
var dolgozo3 = {
    nev: "Kovács Józsi",
    fizetes: 680000,
    beosztas: "Postás",
};
console.log(dolgozo3);
var dolgozok = [dolgozo1, dolgozo2, dolgozo3];
function fizetesNagyoHo(dolgozok) {
    return dolgozok.filter(function (dolgozo) { return dolgozo.fizetes > 350000; })
        .map(function (dolgozo) { return dolgozo.nev; });
}
console.log(fizetesNagyoHo(dolgozok));
