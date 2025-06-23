//1. Interfész: Auto (tipus, evjarat, ar)
//Adj hozzá 3 autót, számold ki az átlagárat
var auto1 = {
    nev: "Audi",
    evjarat: 1990,
    ara: 650000,
};
console.log(auto1);
var auto2 = {
    nev: "BMW",
    evjarat: 2020,
    ara: 975000,
};
console.log(auto2);
var auto3 = {
    nev: "Toyota",
    evjarat: 2024,
    ara: 880000,
};
console.log(auto3);
var autok = [auto1, auto2, auto3];
console.log(autok);
function atlagAruk(autok) {
    var ossz = autok.reduce(function (acc, auto) { return acc + auto.ara; }, 0);
    var atl = ossz / autok.length;
    return atl;
}
console.log(atlagAruk(autok));
