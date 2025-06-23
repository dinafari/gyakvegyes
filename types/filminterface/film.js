/*1. TypeScript – Logikai tömbös feladat
 Hozz létre egy Film interfészt, amely tartalmazza:

    cim: string

    ev: number

    kategoria: string

 Adj hozzá legalább 3 filmobjektumot
 Készíts egy függvényt, amely visszaadja azokat a filmeket, amik 2000 után készültek és "dráma" kategóriájúak
*/
var film1 = {
    cim: "A bálnák világa",
    ev: 1999,
    kategoria: "Természetfilm",
};
console.log(film1);
var film2 = {
    cim: "Pandémia",
    ev: 2023,
    kategoria: "Dráma",
};
console.log(film2);
var film3 = {
    cim: "Elveszett életek",
    ev: 2001,
    kategoria: "Dráma",
};
console.log(film3);
var filmek = [film1, film2, film3];
function ketezerUtnDrama(filmek) {
    var utan = filmek.filter(function (ev) { return ev.ev > 2000; });
    var drama = utan.filter(function (film) { return film.kategoria.toLowerCase() === "dráma"; });
    return drama;
}
console.log(ketezerUtnDrama(filmek));
//2.Visszaadni csak a 2000 előtt készült Film típusú objektumokat ami nem dráma
function noDramaKetEzelott(filmek) {
    var elotti = filmek.filter(function (film) { return film.ev < 2000; });
    var nemd = elotti.filter(function (film) { return film.kategoria.toLowerCase() !== "dráma"; });
    return nemd;
}
console.log(noDramaKetEzelott(filmek));
