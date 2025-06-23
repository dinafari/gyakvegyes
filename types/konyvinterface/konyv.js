var konyv1 = {
    cim: "Sok hűhó semmiért",
    ar: 4200,
    kategoria: "Szinmű"
};
console.log(konyv1);
var konyv2 = {
    cim: "Kincskereső kisködmön",
    ar: 2500,
    kategoria: "Regény"
};
console.log(konyv2);
var konyv3 = {
    cim: "A tizennégy karátos autó",
    ar: 3100,
    kategoria: "Regény"
};
console.log(konyv3);
var konyvek = [konyv1, konyv2, konyv3];
function regenyOsszegkonyvek(konyvek) {
    var regeny = konyvek.filter(function (kategoria) { return kategoria.kategoria.toLowerCase() === "regény"; });
    var aroszz = regeny.reduce(function (acc, kategoria) { return acc + kategoria.ar; }, 0);
    return aroszz;
}
console.log("Regények összára:", regenyOsszegkonyvek(konyvek));
